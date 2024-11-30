import { StyledInput, StyledInputContainer, StyledInputLabel } from './styledComponents'
import { StyledInputLabelContainer } from './styledComponents/StyledInputLabelContainer'

export interface InputProps {
  type: string
  id?: string
  name?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  labelText?: string
  maxLength?: number
  width?: string
  icon?: JSX.Element
}

export const Input = ({
  type,
  id,
  name,
  value,
  placeholder,
  disabled,
  labelText,
  required,
  maxLength,
  width,
  icon,
}: InputProps) => {
  const configuredIcon = icon ? icon : ''

  return (
    <StyledInputLabelContainer>
      {labelText && <StyledInputLabel htmlFor={id}>{labelText}</StyledInputLabel>}
      <StyledInputContainer width={width}>
        {configuredIcon}
        <StyledInput
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
        />
      </StyledInputContainer>
    </StyledInputLabelContainer>
  )
}

export default Input
