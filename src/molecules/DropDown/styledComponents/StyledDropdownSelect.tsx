import styled from 'styled-components'
import { theme } from 'styled-tools'

export interface DropdownSelectProps {
  width?: number
  multiple?: boolean
  icon?: string
  children?: any
}

export type StyledDropdownSelectProps = Partial<HTMLSelectElement> & DropdownSelectProps

const dropdownArrow = `
padding-right: 10rem;
  background-image:
    linear-gradient(45deg, transparent 50%, #146C94 50%),
    linear-gradient(135deg, #146C94 50%, transparent 50%);
  background-position:
    calc(100% - 23px) calc(1em + 10px),
    calc(100% - 16.1px) calc(1em + 10px),
    100% 0;
  background-size:
    7px 7px,
    7px 7px,
    3em 3em;
  background-repeat: no-repeat;`

export const StyledDropdownSelect = styled.select<StyledDropdownSelectProps>`
  display: flex;
  appearance: none;
  border: 0.1rem solid ${theme('colors.borderGray')};
  border-radius: 0.5rem;
  font-family: ${theme('fonts.nunito')};
  padding: ${(props) => (props.multiple ? '.5rem' : '1rem')};
  width: ${(props) => props.width || 18}rem;
  ${(props) => (props.multiple ? '' : dropdownArrow)};
`
