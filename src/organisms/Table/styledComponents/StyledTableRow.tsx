import styled from "styled-components";
import { theme } from "styled-tools";

export interface TableRowProps {
    children?: any;
}

export type StyledTableRowProps = Partial<HTMLTableRowElement> & TableRowProps;

export const StyledTableRow = styled.tr`
    display: flex;
    border: 0.1rem solid ${theme('colors.borderGray')};
    &:nth-child(even) {
        background-color: ${theme('colors.borderGray')};
    }
`;
