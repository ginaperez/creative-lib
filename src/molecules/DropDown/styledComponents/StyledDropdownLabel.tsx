import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledDropdownLabel = styled.label`
  display: flex;
  font-family: ${theme("fonts.nunito")};
  font-size: 0.8rem;
  font-weight: bold;
  position: relative;
  left: 0.5rem;
  bottom: 0.3rem;
  color: ${theme("colors.softBlack")};
`;
