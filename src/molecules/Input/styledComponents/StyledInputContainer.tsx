import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface InputContainerProps {
  width?: string
  children?: any
}

export type StyledInputContainerProps = Partial<HTMLDivElement> & InputContainerProps

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${theme('fonts.nunito')};
  font-size: 0.875rem;
  padding: 0.8rem;
  border: solid 0.1rem ${theme('colors.borderGray')};
  border-radius: 0.4rem;
  color: ${theme('colors.softBlack')};
  width: ${(props) => (props.width ? props.width : '5rem')};
`
