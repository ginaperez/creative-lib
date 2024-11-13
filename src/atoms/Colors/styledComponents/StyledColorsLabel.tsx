import styled from 'styled-components';
import { theme } from 'styled-tools';

export interface ColorsLabelProps {
    children?: any;
}

export type StyledColorsLabelProps = Partial<HTMLLabelElement> & ColorsLabelProps;

export const StyledColorsLabel = styled.label<StyledColorsLabelProps>`
    font-family: ${theme('fonts.nunito')};
    display: flex;
    margin: 0 0 0.2rem 0;
    font-size: 0.9rem;
`
