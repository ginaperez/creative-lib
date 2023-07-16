import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledPortalContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${theme('fonts.nunito')};
    border: transparent;
    border-radius: 1.5rem;
    height: 25rem;
    width: 33rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`