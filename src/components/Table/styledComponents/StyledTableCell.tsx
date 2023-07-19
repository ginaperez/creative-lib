import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledTableCell = styled.td`
    display: flex;
    border: 0.1rem solid ${theme('colors.borderGray')};
`