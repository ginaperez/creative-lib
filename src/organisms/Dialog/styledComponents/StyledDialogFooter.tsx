import styled from 'styled-components'

export interface DialogFooterProps {
  children?: any
}

export type StyledDialogFooterProps = Partial<HTMLDivElement> & DialogFooterProps

export const StyledDialogFooter = styled.div<StyledDialogFooterProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 4.4rem;
  width: 100%;
  margin: 0 0 2rem 0;
`
