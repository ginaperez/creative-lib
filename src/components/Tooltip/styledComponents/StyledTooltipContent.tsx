import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';

export const StyledTooltipContent = styled.div<{ visible: boolean }>`
    /* visibility: ${props => props.visible ? 'visible' : 'hidden'}; */
    /* display: none; */
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    ${props => props.visible && css`
        opacity: 1;
        pointer-events: auto;
    `}
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid ${theme('colors.borderGray')};
    border-radius: 0.5rem;
    line-height: 1.5;
    padding: 1rem;
    margin: 0 0 0 1rem;
    width: 15rem;
    height: 100%;
    color: ${theme('colors.black')};
    background-color: ${theme('colors.borderGray')};
    /* transition: 0.4s; */
`