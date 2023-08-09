import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';

export const StyledCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 25%;
  vertical-align: middle;
  border: 0.1rem solid ${theme('colors.borderDarkGray')};
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
      border: 0.15rem solid ${theme('colors.borderDarkGrayHover')};
  }
  &:checked {
      appearance: auto;
      border-radius: 25%;
      border: 0.1rem solid ${theme('colors.darkBlue')};
      background-color: ${theme('colors.darkBlue')};
  }
`