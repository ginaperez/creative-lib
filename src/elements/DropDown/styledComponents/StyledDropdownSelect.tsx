import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledDropdownSelect = styled.select<{ width?: number, multiple?: boolean }>`
    display: flex;
    appearance: none;
    border: 0.1rem solid ${theme('colors.borderGray')};
    border-radius: 0.5rem;
    font-family: ${theme('fonts.nunito')};
    padding: ${(props) => props.multiple ? '.5rem' : '1rem'};
    width: ${(props) => props.width || 10}rem;
    svg {
        margin-right: 2px;
    }
`