import styled from "styled-components";

export interface DropdownOptionProps {
    children?: any;
}

export type StyledDropdownOptionProps = Partial<HTMLOptionElement> & DropdownOptionProps;

export const StyledDropdownOption = styled.option<StyledDropdownOptionProps>`
    display: flex;
`;
