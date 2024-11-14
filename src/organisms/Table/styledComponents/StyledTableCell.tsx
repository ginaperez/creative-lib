import styled from 'styled-components';
import { theme } from 'styled-tools';

export interface TableCellComponentProps {
    children?: any;
}

export type StyledTableCellComponentProps = Partial<HTMLTableCellElement> & TableCellComponentProps;

export const StyledTableCell = styled.td<StyledTableCellComponentProps>`
    display: flex;
    border: 0.1rem solid ${theme('colors.borderGray')};
`;
