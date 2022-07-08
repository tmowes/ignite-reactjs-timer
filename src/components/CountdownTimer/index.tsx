import { useMemo } from 'react'

import * as S from './styles'

export function CountdownTimer() {
  const { minutes, seconds } = { seconds: 0, minutes: 0 }
  // useCountdown()

  const [minLeft, minRight] = useMemo(
    () => String(minutes).padStart(2, '0').split(''),
    [minutes],
  )

  const [secLeft, secRight] = useMemo(
    () => String(seconds).padStart(2, '0').split(''),
    [seconds],
  )

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
