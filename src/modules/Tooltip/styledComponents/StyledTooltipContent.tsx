import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';

export const StyledTooltipContent = styled.div<{ visible: boolean }>`
    position: relative;
    overflow: hidden;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid transparent;
    border-radius: 0.5rem;
    line-height: 1.5;
    padding: 1rem;
    margin: 0 0 0 1rem;
    width: 15rem;
    height: 100%;
    max-height: ${(props) => props.visible ? "100vh" : "0"};
    color: ${theme('colors.softBlack')};
    background-color: ${theme('colors.white')};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`