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

export const FormHeader = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${colors['gray-100']};
    font-size: 1.125rem;
    font-weight: 700;
    flex-wrap: wrap;
  `}
`

export const Label = styled.label``

const BaseInput = styled.input`
  ${({ theme: { colors } }) => css`
    background-color: transparent;
    border: 0;
    height: 2.5rem;
    border-bottom: 2px solid ${colors['gray-500']};
    font-size: inherit;
    font-weight: inherit;
    padding: 0 0.5rem;
    color: ${colors['gray-100']};
    &::placeholder {
      color: ${colors['gray-500']};
    }
    &:focus {
      box-shadow: none;
      border-color: ${colors['green-500']};
    }
  `}
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesInput = styled(BaseInput)`
  width: 4rem;
`

export const Suffix = styled.span``

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
