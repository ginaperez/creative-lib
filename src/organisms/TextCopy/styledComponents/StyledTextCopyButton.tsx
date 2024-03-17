import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledTextCopyButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    background: transparent;
    border: 0.1rem solid ${theme("colors.borderGray")};
    border-radius: 0 0.4rem 0.4rem 0;
    svg {
        font-size: 18px;
        color: ${theme('colors.darkBlue')};
    }
`