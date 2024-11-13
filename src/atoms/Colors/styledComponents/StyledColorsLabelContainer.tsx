import styled from 'styled-components';

export interface ColorsLabelContainerProps {
    children?: any;
}

export type StyledColorsLabelContainerProps = Partial<HTMLDivElement> & ColorsLabelContainerProps;

export const StyledColorsLabelContainer = styled.div<StyledColorsLabelContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
`
