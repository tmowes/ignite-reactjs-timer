/* eslint-disable jsx-a11y/control-has-associated-label */
import { Play } from 'phosphor-react'

import { CountdownTimer } from '../../components/CountdownTimer'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <S.Form>
        <S.FormHeader>
          <S.Label htmlFor="task">Vou trabalhar em</S.Label>
          <S.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Ex: Ajustar o meu Design System"
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
          />
          <S.Suffix>minutos.</S.Suffix>
        </S.FormHeader>
        <CountdownTimer />
        <S.SubmitButton type="submit" disabled>
          <Play size={24} />
          Começar
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  )
}
