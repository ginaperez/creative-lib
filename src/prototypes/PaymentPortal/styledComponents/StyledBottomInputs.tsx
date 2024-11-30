import styled from 'styled-components'

export interface BottomInputsProps {
  children?: any
}

export type StyledBottomInputsProps = Partial<HTMLDivElement> & BottomInputsProps

export const StyledBottomInputs = styled.div<StyledBottomInputsProps>`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`
