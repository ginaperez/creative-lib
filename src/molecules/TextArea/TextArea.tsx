import { StyledTextArea, StyledTextAreaContainer } from './styledComponents'
import { StyledInputLabel } from '../Input'

export interface TextAreaProps {
  /**
   * The ID of the text area.
   */
  id?: string
  name?: string
  placeholder?: string
  maxCharacters?: number
  labelText?: string
}

/**
 * Returns a standard text area. Make sure to pass `id` to enable clicking on the label.
 */
export const TextArea = ({ id, name, placeholder, maxCharacters, labelText }: TextAreaProps) => {
  return (
    <StyledTextAreaContainer>
      {labelText && <StyledInputLabel htmlFor={id}>{labelText}</StyledInputLabel>}
      <StyledTextArea id={id} name={name} placeholder={placeholder} maxLength={maxCharacters} />
    </StyledTextAreaContainer>
  )
}
