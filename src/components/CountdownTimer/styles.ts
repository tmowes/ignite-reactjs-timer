import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  width: 100%;
`

export const NumberContainer = styled.div`
  ${({ theme: { colors, shadows } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    background: ${colors['gray-700']};
    border-radius: 8px;
    -webkit-box-shadow: ${shadows.smooth};
    box-shadow: ${shadows.smooth};
    text-align: center;
    font-size: 10rem;
    letter-spacing: 8px 80px;
  `}
`

export const NumberLeft = styled.span`
  ${({ theme: { colors } }) => css`
    flex: 1;
    padding: 0 1rem;
    border-right: 1px solid ${`${colors.gray}4d`};
  `}
`

export const NumberRight = styled.span`
  ${({ theme: { colors } }) => css`
    flex: 1;
    padding: 0 1rem;
    border-left: 1px solid ${`${colors.gray}4d`};
  `}
`

export const SeparatorText = styled.span`
  ${({ theme: { colors } }) => css`
    flex: 1;
    font-size: 8rem;
    margin: 0 0.5rem;
    color: ${colors['green-500']};
  `}
`
