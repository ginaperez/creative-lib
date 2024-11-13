import styled from 'styled-components';

export interface InputLabelContainer {
    children?: any;
}

export type StyledInputLabelContainerProps = Partial<HTMLDivElement> & InputLabelContainer;

export const StyledInputLabelContainer = styled.div<StyledInputLabelContainerProps>`
    display: flex;
    flex-direction: column;
`;
