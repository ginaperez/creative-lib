import styled from 'styled-components'

export interface ModalBodyProps {
  children?: any
}

export type StyledModalBodyProps = Partial<HTMLParagraphElement> & ModalBodyProps

export const StyledModalBody = styled.p<StyledModalBodyProps>`
  display: flex;
  text-align: left;
`
