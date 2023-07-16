import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledDropDownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: ${theme('fonts.nunito')};
    width: 15rem;
    padding: 0.5rem;
    background-color: ${theme('colors.white')};
    border: 0.1rem solid ${theme('colors.borderGray')};
    /* background-color: red; */
`