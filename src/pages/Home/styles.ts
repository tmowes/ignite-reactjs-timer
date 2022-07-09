import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`

export const SubmitButton = styled.button`
  ${({ theme: { colors } }) => css`
    background: ${colors['green-500']};
    color: ${colors['gray-100']};
    border: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    transition: 180ms ease-in-out;
    font-weight: 700;
    width: 100%;
    height: 4rem;
    &:not(:disabled):hover {
      background: ${colors['green-700']};
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`

export const StopCountdownButton = styled(SubmitButton)`
  ${({ theme: { colors } }) => css`
    background: ${colors['red-500']};
    &:not(:disabled):hover {
      background: ${colors['red-700']};
    }
  `}
`

export const StartCountdownButton = styled(SubmitButton)`
  ${({ theme: { colors } }) => css`
    background: ${colors['green-500']};
    &:not(:disabled):hover {
      background: ${colors['green-700']};
    }
  `}
`
