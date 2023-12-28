import styled from "styled-components";
import { theme } from "styled-tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const defaultIcon = `${(<FontAwesomeIcon icon={faCaretDown} />)}`;

export const StyledDropdownSelect = styled.select<{
  width?: number;
  multiple?: boolean;
  icon?: string;
}>`
  display: flex;
  /* appearance: none; */
  border: 0.1rem solid ${theme("colors.borderGray")};
  border-radius: 0.5rem;
  font-family: ${theme("fonts.nunito")};
  padding: ${(props) => (props.multiple ? ".5rem" : "1rem")};
  width: ${(props) => props.width || 18}rem;
  svg {
    content: ${(props) => props.icon || defaultIcon};
    color: red;
  }
`;
