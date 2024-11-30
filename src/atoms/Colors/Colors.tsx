import {
  StyledColorBox,
  StyledColorsBoxContainer,
  StyledColorsHeading,
  StyledColorsLabel,
  StyledColorsLabelContainer,
} from './styledComponents'

export interface Color {
  name: string
  hex: string
  textColor: string
  heading?: string
}

export interface ColorsProps {
  colors: Color[]
  heading?: string
}

export const Colors = ({ colors, heading }: ColorsProps) => {
  return (
    <>
      <StyledColorsHeading>{heading}</StyledColorsHeading>
      <StyledColorsBoxContainer>
        {colors.map((color) => (
          <>
            <StyledColorBox backgroundColor={color.hex} textColor={color.textColor}>
              <StyledColorsLabelContainer>
                <StyledColorsLabel>{color.name}</StyledColorsLabel>
                <StyledColorsLabel>{color.hex}</StyledColorsLabel>
              </StyledColorsLabelContainer>
            </StyledColorBox>
          </>
        ))}
      </StyledColorsBoxContainer>
    </>
  )
}

export default Colors
