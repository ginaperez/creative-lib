import styled from 'styled-components';

export interface ToggleLabelComponentProps {
    children?: any;
}

export type StyledToggleComponentInputProps = Partial<HTMLLabelElement> & ToggleLabelComponentProps;

export const StyledToggleLabel = styled.label<StyledToggleComponentInputProps>`
    position: relative;
    display: inline-block;
    width: 3.5rem;
    height: 2.1rem;
`;
