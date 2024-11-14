import styled from "styled-components";

export interface TopInputsProps {
    children?: any;
}

export type StyledTopInputsProps = Partial<HTMLDivElement> & TopInputsProps;

export const StyledTopInputs = styled.div<StyledTopInputsProps>`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;
