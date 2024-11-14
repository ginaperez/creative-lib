import styled from "styled-components";

export interface DescriptionProps {
    children?: any;
}

export type StyledDescriptionProps = Partial<HTMLParagraphElement> & DescriptionProps;

export const StyledDescription = styled.p`
    display: block;
    line-height: 24px;
    font-size: 14px;
`;
