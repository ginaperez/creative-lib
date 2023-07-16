import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledDropDownButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
    border: none;
    padding: 0.2rem;
    background-color: transparent;
    font-family: ${theme('fonts.nunito')};
    font-size: 0.9rem;
    /* color: black; */
`