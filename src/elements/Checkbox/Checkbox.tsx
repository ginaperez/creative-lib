import { useState } from "react";
import { GlobalStyles, StyledCheckbox } from "./styledComponents";

interface CheckboxProps {
  id: string;
  name?: string;
  label?: string;
}

export const Checkbox = ({
    id,
    name,
    label
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
