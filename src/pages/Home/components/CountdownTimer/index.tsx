import { useEffect, useMemo } from 'react'

import { differenceInSeconds } from 'date-fns'

import { useCycles } from '../../../../contexts'
import * as S from './styles'

export function CountdownTimer() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    updateSecondsPassed,
  } = useCycles()

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          updateSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          updateSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    totalSeconds,
    updateSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutes = Math.floor(currentSeconds / 60)
  const seconds = currentSeconds % 60

  const [minLeft, minRight] = useMemo(
    () => String(minutes).padStart(2, '0').split(''),
    [minutes],
  )

  const [secLeft, secRight] = useMemo(
    () => String(seconds).padStart(2, '0').split(''),
    [seconds],
  )

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minLeft}${minRight}:${secLeft}${secRight} - Ignite Timer`
    }
  }, [activeCycle, minLeft, minRight, secLeft, secRight])

  return (
    <S.Container>
      <S.NumberContainer>
        <S.NumberLeft>{minLeft}</S.NumberLeft>
        <S.NumberRight>{minRight}</S.NumberRight>
      </S.NumberContainer>
      <S.SeparatorText>:</S.SeparatorText>
      <S.NumberContainer>
        <S.NumberLeft>{secLeft}</S.NumberLeft>
        <S.NumberRight>{secRight}</S.NumberRight>
      </S.NumberContainer>
    </S.Container>
  )
}
