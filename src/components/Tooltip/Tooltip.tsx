import React, { useState } from "react";
import {
  StyledTooltipContainer,
  StyledTooltipContentContainer,
  StyledTooltipIcon,
} from "./styledComponents";

interface TooltipProps {
  tooltipContent?: string;
  tooltipIcon?: JSX.Element;
}

export const Tooltip = ({
    tooltipContent,
    tooltipIcon
}: TooltipProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledTooltipContainer>
      <StyledTooltipIcon
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        {tooltipIcon}
      </StyledTooltipIcon>
      {isActive && (
        <>
          <StyledTooltipContentContainer>
            {tooltipContent}
          </StyledTooltipContentContainer>
        </>
      )}
    </StyledTooltipContainer>
  );
};

export default Tooltip;
