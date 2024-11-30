import { StyledToggleInput, StyledToggleLabel, StyledToggleSlider } from './styledComponents'

export interface ToggleProps {
  id?: string
  name?: string
  onChange: () => void
  color?: string
  /**
   * The transition time in seconds
   */
  transition?: number
  square?: boolean
}

export const Toggle = ({ id, name, onChange, color, transition, square }: ToggleProps) => {
  return (
    <StyledToggleLabel htmlFor={id}>
      <StyledToggleInput
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        color={color}
        square={square}
      />
      <StyledToggleSlider transition={transition} square={square}></StyledToggleSlider>
    </StyledToggleLabel>
  )
}
