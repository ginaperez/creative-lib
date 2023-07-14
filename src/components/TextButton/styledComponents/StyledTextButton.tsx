import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledTextButton = styled.button`
    display: flex;
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: ${theme("colors.darkBlue")};
    &:hover {
        color: ${theme("colors.mediumBlue")};
        cursor: pointer;
    }
`