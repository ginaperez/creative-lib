import styled from 'styled-components'

export interface PortalBodyContainerProps {
  children?: any
}

export type StyledPortalBodyContainerProps = Partial<HTMLDivElement> & PortalBodyContainerProps

export const StyledPortalBodyContainer = styled.div<StyledPortalBodyContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`
