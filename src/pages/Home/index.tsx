import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'

import { useCycles } from '../../contexts'
import { CountdownTimer, NewCycleForm } from './components'
import { NewCycleFormData, newCycleFormSchema } from './newCycleFormSchema'
import * as S from './styles'

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useCycles()
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm

  const onSubmitNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const isSubmitDisabled = !watch('task').trim()

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmitNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountdownTimer />
        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </S.StartCountdownButton>
        )}
      </S.Form>
    </S.Container>
  )
}
