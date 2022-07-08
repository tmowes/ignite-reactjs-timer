import styled, { css } from 'styled-components'

import { StatusProps, STATUS_COLORS } from './types'

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3.5rem;
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colors['gray-100']};
  `}
`

export const Scroll = styled.div`
  flex: 1;
  overflow: auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`

export const Th = styled.th`
  ${({ theme: { colors } }) => css`
    background-color: ${colors['gray-600']};
    color: ${colors['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;
    padding: 1rem;
    text-align: left;
    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }
    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  `}
`

export const Td = styled.td`
  ${({ theme: { colors } }) => css`
    background-color: ${colors['gray-700']};
    border-top: 1px solid ${colors['gray-800']};
    font-size: 0.875rem;
    line-height: 1.6;
    padding: 1rem;
    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  `}
`

export const Status = styled.span<StatusProps>`
  ${({ theme: { colors }, statusColor }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 99999px;
      background-color: ${colors[STATUS_COLORS[statusColor]]};
    }
  `}
`
