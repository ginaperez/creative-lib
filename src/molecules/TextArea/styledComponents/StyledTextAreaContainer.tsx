import styled from 'styled-components';

export interface TextAreaContainerProps {
    children?: any;
}

export type StyledTextAreaContainerProps = Partial<HTMLDivElement> & TextAreaContainerProps;

export const StyledTextAreaContainer = styled.div<StyledTextAreaContainerProps>`
    display: flex;
    flex-direction: column;
`;
