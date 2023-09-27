import React, { useState } from "react";
import { StyledCheckbox, StyledCheckboxLabel } from "./styledComponents";

interface CheckboxProps {
  id?: string;
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
    <>
      <StyledCheckbox
        type="checkbox"
        id={id}
        name={name}
        // checked={true}
        // onChange={handleChange}
      />
        {label &&
          <StyledCheckboxLabel htmlFor={id}>
            <span></span>
            {label}
            <ins><i>{label}</i></ins>
          </StyledCheckboxLabel>}
    </>
  );
};
