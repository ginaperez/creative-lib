import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledColorBox = styled.span<{ backgroundColor: string, textColor: string }>`
    font-family: ${theme('fonts.nunito')};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.75rem;
    width: 10rem;
    color: ${(props) => (props.textColor)};
    background-color: ${(props) => (props.backgroundColor)};
`