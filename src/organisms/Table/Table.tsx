import { StyledTable, StyledTableCell, StyledTableHeader, StyledTableRow } from './styledComponents'

export interface TableProps {
  headerContent?: string
}

export const Table = ({ headerContent }: TableProps) => {
  return (
    <StyledTable>
      <StyledTableRow>
        <StyledTableHeader>{headerContent}</StyledTableHeader>
        <StyledTableHeader>{headerContent}</StyledTableHeader>
        <StyledTableHeader>{headerContent}</StyledTableHeader>
        <StyledTableHeader>{headerContent}</StyledTableHeader>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>First</StyledTableCell>
        <StyledTableCell>Second</StyledTableCell>
        <StyledTableCell>Third</StyledTableCell>
        <StyledTableCell>Fourth</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Fifth</StyledTableCell>
        <StyledTableCell>Sixth</StyledTableCell>
        <StyledTableCell>Seventh</StyledTableCell>
        <StyledTableCell>Eighth</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Ninth</StyledTableCell>
        <StyledTableCell>Tenth</StyledTableCell>
        <StyledTableCell>Eleventh</StyledTableCell>
        <StyledTableCell>Twelfth</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Thirteenth</StyledTableCell>
        <StyledTableCell>Fourteenth</StyledTableCell>
        <StyledTableCell>Fifteenth</StyledTableCell>
        <StyledTableCell>Sixteenth</StyledTableCell>
      </StyledTableRow>
    </StyledTable>
  )
}

export default Table
