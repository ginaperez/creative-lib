import styled from "styled-components";
import { theme } from 'styled-tools';

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme("colors.white")};
    background-color: ${theme("colors.darkBlue")};
    width: 8rem;
    height: 3.5rem;
    border: 0.2rem solid ${theme("colors.darkBlue")};
    border-radius: 1.7rem;
    font-family: ${theme("fonts.nunito")};
    font-weight: 500;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        color: ${theme("colors.mediumBlue")};
        background-color: ${theme("colors.white")};
        border: 0.2rem solid ${theme("colors.mediumBlue")};;
    }
`