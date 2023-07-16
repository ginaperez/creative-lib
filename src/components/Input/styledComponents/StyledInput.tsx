import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledInput = styled.input`
    display: flex;
    justify-content: center;
    font-family: ${theme("fonts.nunito")};
    font-size: 0.875rem;
    padding: 0.8rem;
    border: solid 0.1rem ${theme("colors.borderGray")};
    border-radius: 0.4rem;
    width: ${props => props.width ? props.width : '20rem'};;
    color: ${theme("colors.softBlack")};
    &:disabled {
        cursor: not-allowed;
    }
`