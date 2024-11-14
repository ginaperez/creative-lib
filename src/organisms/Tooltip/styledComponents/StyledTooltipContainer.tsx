import styled from "styled-components";
import { theme } from "styled-tools";

export interface TooltipContainerProps {
    children?: any;
}

export type StyledTooltipContainerProps = Partial<HTMLDivElement> & TooltipContainerProps;

export const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
    font-family: ${theme('fonts.nunito')};
`;
