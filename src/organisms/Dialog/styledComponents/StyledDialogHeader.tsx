import styled from 'styled-components';
import { theme } from 'styled-tools';

export interface DialogHeaderProps {
    children?: any;
}

export type StyledDialogHeaderProps = Partial<HTMLDivElement> & DialogHeaderProps;

export const StyledDialogHeader = styled.div<StyledDialogHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35rem;
    height: 3rem;
    border: solid ${theme('colors.softBlack')};
    border-width: 0 0 0.1rem 0;
`;
