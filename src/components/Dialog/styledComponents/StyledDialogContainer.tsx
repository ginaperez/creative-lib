import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledDialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: ${theme('fonts.nunito')};
    line-height: 1.5;
    height: 18rem;
    width: 34rem;
    color: ${theme('colors.softBlack')};
    border: 0.1rem solid ${theme('colors.borderGray')};
    box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);
    border-radius: 2rem;
    padding: 0 3rem 0 3rem;
`