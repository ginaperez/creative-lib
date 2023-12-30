import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledDialogContainer = styled.div`
  font-family: ${theme('fonts.nunito')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 0.1rem solid ${theme('colors.borderGray')};
  border-radius: 0.4rem;
`;
