import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledTableRow = styled.tr`
    display: flex;
    /* justify-content: space-evenly; */
    border: 0.1rem solid ${theme('colors.borderGray')};
    &:nth-child(even) {
        background-color: ${theme('colors.borderGray')};
    }
`