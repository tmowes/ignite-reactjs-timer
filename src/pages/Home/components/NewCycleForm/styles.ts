import styled, { css } from 'styled-components'

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
