import { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { differenceInSeconds } from 'date-fns'

import { CreateCycleData, Cycle, CyclesContextData, CyclesContextProviderProps } from './types'

export const CyclesContext = createContext({} as CyclesContextData)

export function CyclesProvider({ children }: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() =>
    activeCycle ? differenceInSeconds(new Date(), new Date(activeCycle.startDate)) : 0,
  )

  function updateSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  const markCurrentCycleAsFinished = useCallback(() => {
    setCycles((prev) =>
      prev.map((cycle) => (cycle.id === activeCycleId ? { ...cycle, finished: true } : cycle)),
    )
    setActiveCycleId(null)
  }, [activeCycleId])

  function createNewCycle({ task, minutesAmount }: CreateCycleData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }
    setCycles((prev) => [...prev, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = useCallback(() => {
    console.log('interruptCurrentCycle')
    setCycles((prev) =>
      prev.map((cycle) =>
        cycle.id === activeCycleId ? { ...cycle, interruptedDate: new Date() } : cycle,
      ),
    )
    setActiveCycleId(null)
  }, [activeCycleId])

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
