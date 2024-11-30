import styled from 'styled-components'

export interface ColorsBoxContainerProps {
  children?: any
}

export type StyledColorsBoxContainerProps = Partial<HTMLDivElement> & ColorsBoxContainerProps

export const StyledColorsBoxContainer = styled.div<StyledColorsBoxContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60rem;
`
