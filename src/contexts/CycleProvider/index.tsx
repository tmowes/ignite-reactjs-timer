import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import { differenceInSeconds } from 'date-fns'

import { CYCLES_KEY_STORAGE } from '../../configs/localStorageKeys'
import { cyclesReducer } from '../../reducers/cyclesReducer'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../../reducers/cyclesReducer/actions'
import { CreateCycleData, Cycle, CyclesContextData, CyclesContextProviderProps } from './types'

export const CyclesContext = createContext({} as CyclesContextData)

const cyclesInitialState = {
  cycles: [],
  activeCycleId: null,
}

export function CyclesProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, cyclesInitialState, () => {
    const storedStateAsJSON = localStorage.getItem(CYCLES_KEY_STORAGE)
    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : cyclesInitialState
  })

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() =>
    activeCycle ? differenceInSeconds(new Date(), new Date(activeCycle.startDate)) : 0,
  )

  function updateSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  const markCurrentCycleAsFinished = useCallback(() => {
    dispatch(markCurrentCycleAsFinishedAction())
  }, [])

  function createNewCycle({ task, minutesAmount }: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task,
      minutesAmount,
      startDate: new Date(),
    }
    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = useCallback(() => {
    dispatch(interruptCurrentCycleAction())
  }, [])

  useEffect(() => {
    localStorage.setItem(CYCLES_KEY_STORAGE, JSON.stringify(cyclesState))
  }, [cyclesState])

  const providerValues = useMemo(
    () => ({
      cycles,
      activeCycle,
      activeCycleId,
      markCurrentCycleAsFinished,
      amountSecondsPassed,
      updateSecondsPassed,
      createNewCycle,
      interruptCurrentCycle,
    }),
    [
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      cycles,
      interruptCurrentCycle,
      markCurrentCycleAsFinished,
    ],
  )

  return <CyclesContext.Provider value={providerValues}>{children}</CyclesContext.Provider>
}

export function useCycles() {
  const context = useContext(CyclesContext)
  if (!context) {
    throw new Error('useCycles must be used within a CyclesProvider')
  }
  return context
}
