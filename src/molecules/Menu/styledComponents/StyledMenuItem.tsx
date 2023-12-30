import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledMenuItem = styled.div`
    cursor: default;
    display: flex;
    justify-content: baseline;
    width: 88%;
    padding-left: 1rem;
    &:hover {
        cursor: pointer;
        background-color: ${theme('colors.borderGray')};
    }
`;