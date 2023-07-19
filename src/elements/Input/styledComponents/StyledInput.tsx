import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledInput = styled.input`
    display: flex;
    border: none;
    height: 100%;
    width: 90%;
    outline: none;
    /* justify-content: center; */
    font-family: ${theme("fonts.nunito")};
    font-size: 0.875rem;
    margin-left: 0.75rem;
    /* padding: 0.8rem;
    border: solid 0.1rem ${theme("colors.borderGray")};
    border-radius: 0.4rem;
    color: ${theme("colors.softBlack")}; */
    &:disabled {
        cursor: not-allowed;
    }
`