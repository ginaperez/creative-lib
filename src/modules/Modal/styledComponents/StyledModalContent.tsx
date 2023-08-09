import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledModalContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme('fonts.nunito')};
  height: 20rem;
  width: 35rem;
  line-height: 1.5;
  /* border: solid black; */
  /* border-radius: 2.5rem; */
  /* position: absolute; */
  padding: 2rem;
`;
