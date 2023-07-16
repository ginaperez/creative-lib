import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledTooltipContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid ${theme('colors.borderGray')};
    border-radius: 0.5rem;
    width: 4rem;
    height: 2rem;
    color: ${theme('colors.white')};
    background-color: #555a64;
    transition: opacity 3s;
`