import { StyledDropdownLabel, StyledDropdownOption, StyledDropdownSelect } from './styledComponents'

export interface OptionType {
  value: string
  label: string
}

export interface DropDownProps {
  /**
   * Use optionsArray when mapping
   * dropdown options from an array
   */
  optionsArray?: OptionType[]
  value?: string
  id?: string
  name?: string
  placeholderText?: string
  label?: string
  /**
   * Sets the width using a number
   * with rem. Default width is 10rem
   */
  width?: number
  multiple?: boolean
  autoFocus?: boolean
  disabled?: boolean
  type?: string
  size?: number
  length?: number
  selectedIndex?: number
  icon?: string
}

export const DropDown = ({
  id,
  name,
  placeholderText,
  label,
  width,
  multiple,
  optionsArray,
  value,
  autoFocus,
  size,
  icon,
}: DropDownProps) => {
  return (
    <>
      {label && <StyledDropdownLabel htmlFor={id}>{label}</StyledDropdownLabel>}
      <StyledDropdownSelect
        id={id}
        name={name}
        // placeholder={placeholderText}
        width={width}
        multiple={multiple}
        value={value}
        autoFocus={autoFocus}
        size={size}
        icon={icon}
      >
        {optionsArray &&
          optionsArray.map((option) => (
            <StyledDropdownOption value={option.value}>{option.label}</StyledDropdownOption>
          ))}
      </StyledDropdownSelect>
    </>
  )
}

export default DropDown
