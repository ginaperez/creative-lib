import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledToggleSwitchLabel = styled.label`
    cursor: pointer;
    position: relative;
    display: block;
    text-indent: -9999px;
    width: 200px;
    height: 100px;
    border-radius: 100px;
    &:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 90px;
        height: 90px;
        background: black;
        border-radius: 90px;
        transition: 0.3s;
    }
    &:active:after {
        width: 130px;
    }
`