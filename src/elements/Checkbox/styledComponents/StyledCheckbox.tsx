import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';

const bounceAnimation = keyframes`
  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(.9);
  }
  100% {
    transform: scale(1);
  }
`;

const BounceCheckbox = styled.label`
  --background: #fff;
  --border: #D1D6EE;
  --border-hover: #BBC1E1;
  --border-active: #1E2235;
  --tick: #fff;
  position: relative;

  input, svg {
    width: 21px;
    height: 21px;
    display: block;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    outline: none;
    background: var(--background);
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    transition: box-shadow .3s;
    box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));

    &:hover {
      --s: 2px;
      --b: var(--border-hover);
    }

    &:checked {
      --b: var(--border-active);
    }
  }

  svg {
    pointer-events: none;
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--stroke, var(--border-active));
    position: absolute;
    top: 0;
    left: 0;
    width: 21px;
    height: 21px;
    transform: scale(var(--scale, 1)) translateZ(0);
  }

  &.bounce {
    --stroke: var(--tick);
    
    input {
      &:checked {
        --s: 11px;

        & + svg {
          animation: ${bounceAnimation} .4s linear forwards .2s;
        }
      }
    }

    svg {
      --scale: 0;
    }
  }
`;

const CheckboxSvg = styled.svg`
  pointer-events: none;
  fill: none;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--stroke, var(--border-active));
  position: absolute;
  top: 0;
  left: 0;
  width: 21px;
  height: 21px;
  transform: scale(var(--scale, 1)) translateZ(0);
`;

export const StyledCheckbox = styled.input`


    /* width: 1.25rem;
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
    } */
`