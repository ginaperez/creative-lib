import styled from 'styled-components'

export interface TableHeaderProps {
  children?: any
}

export type StyledTableHeaderProps = Partial<HTMLTableCellElement> & TableHeaderProps

export const StyledTableHeader = styled.th`
  display: flex;
  justify-content: space-evenly;
`
