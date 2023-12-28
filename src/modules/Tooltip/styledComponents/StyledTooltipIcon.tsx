import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledTooltipIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    /* border: 0.01rem solid ${theme('colors.borderGray')}; */
    border-radius: 1.1rem;
    color: ${theme('colors.white')};
    background-color: ${theme('colors.mediumBlue')};
`
