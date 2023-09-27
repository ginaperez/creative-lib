import styled, { keyframes } from 'styled-components';

const shrinkBounce = keyframes`
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

const checkboxCheck = keyframes`
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
    border-color: #212121;
    transform: translate3d(0,-.5em,0) rotate(45deg);
  }
`;

export const StyledCheckbox = styled.input`
  /* height: 0;
  width: 0; */
  visibility: hidden;
  position: absolute;

  + label {
    position: relative;
    display: flex;
    margin: .6em 0;
    align-items: center;
    color: blue;
    transition: color 250ms cubic-bezier(.4,.0,.23,1);
  }

  + label > ins {
    position: absolute;
    display: block;
    bottom: 0;
    left: 2em;
    height: 0;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    transition: height 300ms cubic-bezier(.4,.0,.23,1);
  }

  + label > ins > i {
    position: absolute;
    bottom: 0;
    font-style: normal;
    color: #4FC3F7;
  }

  + label > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    width: 1em;
    height: 1em;
    background: transparent;
    border: 2px solid green;
    border-radius: 2px;
    cursor: pointer;  
    transition: all 250ms cubic-bezier(.4,.0,.23,1);
  }

  + label:hover, &:focus + label {
    color: red;
  }

  + label:hover > span, &:focus + label > span {
    background: rgba(255,255,255,.1);
  }

  &:checked + label > ins {
    height: 100%;
  }

  &:checked + label > span {
    border: .5em solid #FFEB3B;
    animation: ${shrinkBounce} 200ms cubic-bezier(.4,.0,.23,1);
  }

  &:checked + label > span:before {
    content: "";
    position: absolute;
    top: .6em;
    left: .2em;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: ${checkboxCheck} 125ms 250ms cubic-bezier(.4,.0,.23,1) forwards;
  }
`