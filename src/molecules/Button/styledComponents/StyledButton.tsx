import styled, { css } from 'styled-components'
import { theme } from 'styled-tools'

export interface ButtonProps {
  text?: boolean
  square?: boolean
  children?: any
}

export type StyledButtonProps = Partial<HTMLButtonElement> & ButtonProps

export const StyledButton = styled.button<StyledButtonProps>`
  // default button styling
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme('colors.white')};
  background-color: ${theme('colors.darkBlue')};
  min-width: 8rem;
  min-height: 3.5rem;
  padding: 1rem;
  border: 0.2rem solid ${theme('colors.darkBlue')};
  border-radius: 2rem;
  font-family: ${theme('fonts.nunito')};
  font-weight: 500;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: ${theme('colors.white')};
    background-color: ${theme('colors.mediumBlue')};
    border: 0.2rem solid ${theme('colors.mediumBlue')};
  }

  // text button styling
  ${(props) =>
    props.text &&
    css`
      background: none;
      border: none;
      padding: 0;
      min-width: 0;
      font-weight: 500;
      font-size: 1rem;
      color: ${theme('colors.darkBlue')};
      transition: 0.3s;
      &:hover {
        color: ${theme('colors.mediumBlue')};
        border: none;
        background: none;
        cursor: pointer;
      }
    `}

  // square button styling
    ${(props) =>
    props.square &&
    css`
      min-width: 8rem;
      min-height: 3rem;
      border-radius: 0.3rem;
    `}
`
