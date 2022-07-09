/* eslint-disable jsx-a11y/control-has-associated-label */
import { useFormContext } from 'react-hook-form'

import { useCycles } from '../../../../contexts'
import * as S from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycles()
  const { register } = useFormContext()

  return (
    <S.FormHeader>
      <S.Label htmlFor="task">Vou trabalhar em</S.Label>
      <S.TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Ex: Ajustar o meu Design System"
        disabled={!!activeCycle}
        {...register('task')}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <S.Suffix>minutos.</S.Suffix>
    </S.FormHeader>
  )
}
