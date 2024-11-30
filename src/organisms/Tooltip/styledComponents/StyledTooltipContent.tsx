import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface TooltipContentProps {
  top: string
  right: string
  left: string
  bottom: string
  children?: any
}

export type StyledTooltipContentProps = Partial<HTMLDivElement> & TooltipContentProps

export const StyledTooltipContent = styled.div<StyledTooltipContentProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  border: solid transparent;
  border-radius: 0.5rem;
  line-height: 1.5;
  padding: 1rem;
  margin: 0 0 0 1rem;
  width: 15rem;
  height: fit-content;
  color: ${theme('colors.softBlack')};
  background-color: ${theme('colors.white')};
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  pointer-events: none;
`
