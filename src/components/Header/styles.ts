import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Menu = styled.nav`
  ${({ theme: { colors } }) => css`
    display: flex;
    gap: 0.5rem;
    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all 180ms ease-in-out;
      &:hover {
        border-bottom: 3px solid ${colors['green-500']};
      }
      &.active {
        color: ${colors['green-500']};
      }
    }
  `}
`

export const Logo = styled.img``
