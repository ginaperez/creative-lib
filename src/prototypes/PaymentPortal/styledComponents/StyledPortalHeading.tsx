import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface PortalHeadingProps {
  children?: any
}

export type StyledPortalHeadingProps = Partial<HTMLHeadingElement> & PortalHeadingProps

export const StyledPortalHeading = styled.h1<StyledPortalHeadingProps>`
  display: flex;
  font-size: 1.6rem;
  margin: 2rem 0 0 2rem;
  color: ${theme('colors.softBlack')};
`
