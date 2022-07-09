import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useCycles } from '../../contexts'
import * as S from './styles'

export function History() {
  const { cycles } = useCycles()

  return (
    <S.Container>
      <S.Title>Meu Histórico</S.Title>
      <S.Scroll>
        <S.Table>
          <thead>
            <tr>
              <S.Th>Tarefa</S.Th>
              <S.Th>Duração</S.Th>
              <S.Th>Início</S.Th>
              <S.Th>Status</S.Th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <S.Td>{cycle.task}</S.Td>
                <S.Td>{cycle.minutesAmount} minutos</S.Td>
                <S.Td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </S.Td>
                <S.Td>
                  {cycle.finishedDate && <S.Status statusColor="green">Concluído</S.Status>}
                  {cycle.interruptedDate && <S.Status statusColor="red">Interrompido</S.Status>}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <S.Status statusColor="yellow">Em andamento</S.Status>
                  )}
                </S.Td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Scroll>
    </S.Container>
  )
}
