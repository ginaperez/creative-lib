import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    /* text-align: left; */
    flex-direction: column;
    font-family: ${theme('fonts.nunito')};
    color: ${theme('colors.softBlack')};
    /* border: 0.1rem solid ${theme('colors.borderDarkGray')}; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    /* border-radius: 1rem; */
    width: 7rem;
    padding: 0.5rem 0 0.5rem 0;
`;