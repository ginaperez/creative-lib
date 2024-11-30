import styled from 'styled-components'

export interface ModalHeaderContainerProps {
  children?: any
}

export type StyledModalHeaderContainerProps = Partial<HTMLDivElement> & ModalHeaderContainerProps

export const StyledModalHeaderContainer = styled.div<StyledModalHeaderContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 32rem;
`
