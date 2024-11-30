import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface TableComponentProps {
  children?: any
}

export type StyledTableComponentProps = Partial<HTMLTableElement> & TableComponentProps

export const StyledTable = styled.table<StyledTableComponentProps>`
  border: 0.1rem solid ${theme('colors.borderGray')};
  min-height: 15rem;
  min-width: 25rem;
`
