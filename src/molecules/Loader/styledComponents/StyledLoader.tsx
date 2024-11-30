import styled, { css, keyframes } from 'styled-components'
import { theme } from 'styled-tools'

export interface LoaderComponentProps {
  color?: string
  circle?: boolean
  bar?: boolean
  loadingSpeed?: number
  children?: any
}

export type StyledLoaderProps = Partial<HTMLDivElement> & LoaderComponentProps

const rotate = keyframes`
      100% {
        transform: rotate(360deg);
      }
`

const circleClip = keyframes`
    0% {
      clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
`

const barProgress = keyframes`
  to {
    width: 100%;
  }
`

export const StyledLoader = styled.div<StyledLoaderProps>`
  // default circle loader styling
  ${(props) =>
    props.circle &&
    css`
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      position: relative;
      animation: ${rotate} 1s linear infinite;
      &::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0rem;
        border-radius: 50%;
        border: 0.5rem solid ${(props) => (props as StyledLoaderProps).color || '#146C94'};
        animation: ${circleClip} 2s linear infinite;
      }
    `}

  // bar loader styling
  ${(props) =>
    props.bar &&
    css`
      display: block;
      position: relative;
      height: 0.8rem;
      width: 20rem;
      border-radius: 1rem;
      background: ${theme('colors.borderGray')};
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0;
        background: ${(props) => (props as StyledLoaderProps).color || '#146C94'};
        animation: ${barProgress} ${(props) => (props as StyledLoaderProps).loadingSpeed || 6}s
          ease-in infinite;
      }
    `}
`
