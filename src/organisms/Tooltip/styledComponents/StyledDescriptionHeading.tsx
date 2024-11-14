import styled from "styled-components";

export interface DescriptionHeadingProps {
    children?: any;
}

export type StyledDescriptionHeadingProps = Partial<HTMLHeadingElement> & DescriptionHeadingProps;

export const StyledDescriptionHeading = styled.h1<StyledDescriptionHeadingProps>`
    font-size: 32px;
    line-height: 36px;
`;
