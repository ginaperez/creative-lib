import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledDescriptionContainer = styled.div`
    font-family: ${theme('fonts.nunito')};
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;
    margin: 0 0 5rem 0;
`