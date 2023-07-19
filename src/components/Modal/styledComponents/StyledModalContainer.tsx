import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 30rem;
  border: 0.1rem solid ${theme('colors.borderGray')};
  border-radius: 2rem;
  position: relative;
  left: 25vw;
  top: 25vh;
  box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);
`;
