import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledToggleInput = styled.input<{ color?: string, square?: boolean }>`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
        background-color: ${(props) => props.color || props.theme.colors.darkBlue};
    }
    &:focus + span {
        box-shadow: 0 0 0.1rem ${theme('colors.darkBlue')};
    }
    &:checked + span:before {
        transform: ${(props) => props.square ? 'translateX(1.6rem)' : 'translateX(1.4rem)'};
    }
`