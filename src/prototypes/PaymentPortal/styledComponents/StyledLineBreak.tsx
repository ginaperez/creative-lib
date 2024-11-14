import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledLineBreak = styled.hr<Partial<HTMLHRElement>>`
    display: flex;
    color: ${theme('colors.borderGray')};
    width: 29rem;
`;
