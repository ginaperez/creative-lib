import styled from 'styled-components'

export interface ModalFooterContainerProps {
  children?: any
}

export type StyledModalFooterContainerProps = Partial<HTMLDivElement> & ModalFooterContainerProps

export const StyledModalFooterContainer = styled.div<StyledModalFooterContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
`
