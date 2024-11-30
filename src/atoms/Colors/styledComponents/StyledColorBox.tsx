import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface ColorBoxProps {
  backgroundColor: string
  textColor: string
  children?: any
}

export type StyledColorBoxProps = Partial<HTMLSpanElement> & ColorBoxProps

export const StyledColorBox = styled.span<StyledColorBoxProps>`
  font-family: ${theme('fonts.nunito')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 13rem;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
`
