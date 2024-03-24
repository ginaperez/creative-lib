import styled, { keyframes } from "styled-components";
import { theme } from "styled-tools";

const checkBounce = keyframes`
  0%{
    transform: scale(1);
  }
  33%{    
    transform: scale(.85);
  }
  100%{
    transform: scale(1);    
  }
`;

const checkIcon = keyframes`
  0%{
    width: 0;
    height: 0;
    border-color: #212121;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  33%{
    width: .2em;
    height: 0;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  100%{    
    width: .2em;
    height: .5em;    
    border-color: #fff;
    transform: translate3d(-.1em,-.65em,0) rotate(45deg);
  }
`;

export const StyledCheckbox = styled.input<{ labelColor?: string, boxColor?: string}>`
  height: 0;
  width: 0;

  & + label {
    position: relative;
    display: flex;
    margin: 0.6em 0;
    align-items: center;
    color: ${(props) => props.labelColor ? props.labelColor : "#9e9e9e" };
    transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
  }
  & + label > ins {
    position: absolute;
    display: block;
    bottom: 0;
    left: 2em;
    height: 0;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1);
  }
  & + label > ins > i {
    position: absolute;
    bottom: 0;
    font-style: normal;
    color: ${theme('colors.mediumBlue')};
  }
  & + label > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.74rem;
    width: 1.25rem;
    height: 1.25rem;
    background: transparent;
    border: 0.15rem solid ${(props) => props.labelColor ? props.labelColor : "#9e9e9e" };
    border-radius: 0.1rem;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
  }

  & + label:hover,
  &:focus + label {
    color: ${theme("colors.darkBlue")};
  }
  & + label:hover > span,
  &:focus + label > span {
    background: rgba(255, 255, 255, 0.1);
  }
  &:checked + label > ins {
    height: 100%;
  }

  &:checked + label > span {
    border: 0.65rem solid ${theme("colors.mediumBlue")};
    animation: ${checkBounce} 200ms cubic-bezier(0.4, 0, 0.23, 1);
  }
  &:checked + label > span:before {
    content: "";
    position: absolute;
    top: 0.65rem;
    left: 0.3rem;
    border-right: 0.3rem solid transparent;
    border-bottom: 0.3rem solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: ${checkIcon} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1)
      forwards;
  }
`;

export const GlobalStyles = styled.div`
  font-family: ${theme("fonts.nunito")};

  * {
    box-sizing: border-box;
    user-select: none;
  }
  html,
  body {
    margin: 0;
    height: 100%;
  }
`;
