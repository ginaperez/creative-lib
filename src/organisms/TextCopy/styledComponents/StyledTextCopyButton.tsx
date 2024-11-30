import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface TextCopyButtonProps {
  children?: any
}

export type StyledTextCopyButtonProps = Partial<HTMLButtonElement> & TextCopyButtonProps

export const StyledTextCopyButton = styled.button<StyledTextCopyButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background: transparent;
  border: 0.1rem solid ${theme('colors.borderGray')};
  border-radius: 0 0.4rem 0.4rem 0;
  svg {
    font-size: 18px;
    color: ${theme('colors.darkBlue')};
  }
`
