import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface ColorsHeadingProps {
  children?: any
}

export type StyledColorsHeadingProps = Partial<HTMLHeadingElement> & ColorsHeadingProps

export const StyledColorsHeading = styled.h2<StyledColorsHeadingProps>`
  font-family: ${theme('fonts.nunito')};
`
