import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface TextAreaComponentProps {
  children?: any
}

export type StyledTextAreaProps = Partial<HTMLTextAreaElement> & TextAreaComponentProps

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  display: flex;
  justify-content: center;
  font-family: ${theme('fonts.nunito')};
  font-size: 0.9rem;
  padding: 0.8rem;
  border: solid 0.1rem ${theme('colors.borderGray')};
  border-radius: 0.4rem;
  width: 20rem;
  height: 5rem;
  color: ${theme('colors.softBlack')};
`
