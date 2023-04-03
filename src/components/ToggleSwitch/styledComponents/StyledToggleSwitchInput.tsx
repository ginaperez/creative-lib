import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledToggleSwitchInput = styled.input`
    height: 0;
    width: 0;
    &:checked {
        transform: translateX(2.4rem);
    }
`