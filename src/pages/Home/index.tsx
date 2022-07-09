/* eslint-disable jsx-a11y/control-has-associated-label */
import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { CountdownTimer } from '../../components/CountdownTimer'
import { NewCycleFormData, newCycleFormSchema } from './formValidationSchema'
import * as S from './styles'

export function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const onSubmitNewCycle = (data: NewCycleFormData) => {
    console.log(data)
    reset()
  }

  console.log(errors)

  const isSubmitDisabled = !watch('task')

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmitNewCycle)}>
        <S.FormHeader>
          <S.Label htmlFor="task">Vou trabalhar em</S.Label>
          <S.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Ex: Ajustar o meu Design System"
            {...register('task', { required: true })}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>
          <S.Label htmlFor="minutesAmount">durante</S.Label>
          <S.MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true, required: true })}
          />
          <S.Suffix>minutos.</S.Suffix>
        </S.FormHeader>
        <CountdownTimer />
        <S.SubmitButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  )
}
