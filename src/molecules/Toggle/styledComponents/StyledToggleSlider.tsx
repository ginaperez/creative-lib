import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledToggleSlider = styled.span<{ transition?: number, square?: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme("colors.borderGray")};
  transition: ${(props) => props.transition || 0.4}s;
  border-radius: ${(props) => props.square ? 0 : 3.4}rem;
  &:before {
    position: absolute;
    content: "";
    height: ${(props) => props.square ? 1.9 : 1.7}rem;
    width: 1.7rem;
    left: ${(props) => props.square ? 0.1 : 0.2}rem;
    bottom: ${(props) => props.square ? 0.1 : 0.2}rem;
    background-color: ${theme("colors.white")};
    transition: ${(props) => props.transition || 0.4}s;
    border-radius: ${(props) => props.square ? 0 : '50%'};
  }
`;
