import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledCopyText = styled.div<{
    width?: number
}>`
    display: flex;
    border: solid 0.1rem ${theme("colors.borderGray")};
    color: ${theme('colors.softBlack')};
    border-right: 0;
    border-radius: 0.4rem 0 0 0.4rem;
    padding: 10px;
    width: ${(props) => props.width || 15}rem;
    white-space: nowrap;
    overflow: scroll;
    font-size: 13px;
    font-family: ${theme('fonts.fira')};
`