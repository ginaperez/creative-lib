import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: ${theme('fonts.nunito')};
    color: ${theme('colors.softBlack')};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    width: 7rem;
    padding: 0.5rem 0 0.5rem 0;
`;