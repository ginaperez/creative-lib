import styled from 'styled-components'

export interface ButtonsContainerProps {
  children?: any
}

export type StyledButtonsContainerProps = Partial<HTMLDivElement> & ButtonsContainerProps

export const StyledButtonsContainer = styled.div<StyledButtonsContainerProps>`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`
