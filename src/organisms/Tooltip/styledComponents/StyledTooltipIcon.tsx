import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface TooltipIconProps {
  children?: any
}

export type StyledTooltipIconProps = Partial<HTMLSpanElement> & TooltipIconProps

export const StyledTooltipIcon = styled.span<StyledTooltipIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1.1rem;
  color: ${theme('colors.white')};
  background-color: ${theme('colors.mediumBlue')};
`
