import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledInputContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  font-family: ${theme("fonts.nunito")};
  font-size: 0.875rem;
  padding: 0.8rem;
  border: solid 0.1rem ${theme("colors.borderGray")};
  border-radius: 0.4rem;
  color: ${theme("colors.softBlack")};
  width: ${(props) => (props.width ? props.width : "5rem")};
  &:focus {
    outline: rebeccapurple;
    background-color: red;
  }
`;
