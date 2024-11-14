import styled from "styled-components";
import { theme } from "styled-tools";

export interface CopyTextComponentProps {
    top: string;
    right: string;
    left: string;
    bottom: string;
    children?: any;
}

export type StyledCopyTextComponentProps = Partial<HTMLDivElement> & CopyTextComponentProps;

export const StyledCopyTooltip = styled.div<StyledCopyTextComponentProps>`
    font-family: ${theme('fonts.nunito')};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: ${(props) => props.right};
    left: ${(props) => props.left};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    transform: translateY(-50%);
    background-color: ${theme('colors.softBlack')};
    color: ${theme('colors.white')};
    padding: 0.8rem;
    height: 10px;
    width: 4.5rem;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1;
`;
