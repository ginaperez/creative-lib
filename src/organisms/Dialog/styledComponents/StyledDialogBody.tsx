import styled from 'styled-components'

export interface DialogBodyProps {
  children?: any
}

export type StyledDialogBodyProps = Partial<HTMLDivElement> & DialogBodyProps

export const StyledDialogBody = styled.div<StyledDialogBodyProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  padding: 0 1rem 0 1rem;
`
