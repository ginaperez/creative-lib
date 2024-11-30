import { StyledRadioButton } from './styledComponents'

export interface RadioButtonProps {
  id?: string
  name?: string
  disabled?: boolean
  /**
   * The number of seconds that the animation will take to complete.
   * Can specify decimal values like `.5`, `0.6`, `9`, etc
   * @default 0.3
   */
  speed?: number
}

export const RadioButton = ({ id, name, disabled, speed }: RadioButtonProps) => {
  return <StyledRadioButton type="radio" id={id} name={name} disabled={disabled} speed={speed} />
}
