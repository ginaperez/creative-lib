import styled from 'styled-components';
import { theme } from 'styled-tools';

export interface HeadingContainerProps {
    children?: any;
}

export type StyledHeadingContainerProps = Partial<HTMLDivElement> & HeadingContainerProps;

export const StyledHeadingContainer = styled.div<StyledHeadingContainerProps>`
    font-family: ${theme('fonts.nunito')};
`
