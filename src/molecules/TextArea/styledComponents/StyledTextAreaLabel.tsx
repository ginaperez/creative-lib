import styled from "styled-components";

export interface TextAreaLabelProps {
    children?: any;
}

export type StyledTextAreaLabelProps = Partial<HTMLLabelElement> & TextAreaLabelProps;

export const StyledTextAreaLabel = styled.label`
    display: flex;
`;
