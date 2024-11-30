import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface RadioButtonComponentProps {
  speed?: number
  children?: any
}

export type StyledRadioButtonProps = Partial<HTMLInputElement> & RadioButtonComponentProps

export const StyledRadioButton = styled.input<StyledRadioButtonProps>`
  --s: 1.3em; /* control the size */
  --c: ${theme('colors.darkBlue')}; /* the active color */

  height: 1.7rem;
  aspect-ratio: 1;
  border: calc(var(--s) / 8) solid ${theme('colors.borderGray')};
  padding: calc(var(--s) / 8);
  background: radial-gradient(farthest-side, var(--c) 94%, ${theme('colors.white')}) 50%/0 0
    no-repeat content-box;
  border-radius: 50%;
  outline-offset: calc(var(--s) / 10);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: inherit;
  transition: ${(props) => (props.speed ? props.speed : 0.3)}s;

  &:checked {
    border-color: var(--c);
    background-size: 100% 100%;
  }

  &:disabled {
    background: linear-gradient(${theme('colors.disabled')} 0 0) 50%/100% 20% no-repeat content-box;
    opacity: 0.5;
    cursor: not-allowed;
  }
`
