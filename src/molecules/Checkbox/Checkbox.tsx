import { useState } from "react";
import { GlobalStyles, StyledCheckbox } from "./styledComponents";

export interface CheckboxProps {
  id: string;
  name?: string;
  label?: string;
  boxColor?: string;
  labelColor?: string;
}

export const Checkbox = ({
    id,
    name,
    label,
    boxColor,
    labelColor
}: CheckboxProps) => {
  const [ isChecked, setIsChecked ] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => !prev);
  }

  return (
    <GlobalStyles>
      <StyledCheckbox
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        boxColor={boxColor}
        labelColor={labelColor}
      />
        {label &&
          <label htmlFor={id}>
            <span></span>
            {label}
            <ins>
              <i>
                {label}
              </i>
            </ins>
          </label>
        }
    </GlobalStyles>
  );
};
