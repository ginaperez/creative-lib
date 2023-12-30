import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledDialogContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme('fonts.nunito')};
  width: 35rem;
  line-height: 1.5;
  padding: 2rem;
`;
