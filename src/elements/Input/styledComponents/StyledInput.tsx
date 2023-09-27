import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledInput = styled.input`
    display: flex;
    border: none;
    height: 100%;
    width: 90%;
    outline: none;
    font-family: ${theme("fonts.nunito")};
    font-size: 0.875rem;
    margin-left: 0.75rem;
    &:disabled {
        cursor: not-allowed;
    }
`