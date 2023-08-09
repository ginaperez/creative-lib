import React, { useState } from "react";
import {
  StyledTooltipContainer,
  StyledTooltipContent,
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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledTooltipContainer>
      <StyledTooltipIcon
        onMouseEnter={() => {
          setIsVisible(true);
          console.log('is it visible: ', isVisible);
        }}
        onMouseLeave={() => {
            setIsVisible(false);
        }}
      >
        {tooltipIcon}
      </StyledTooltipIcon>
      {isVisible && (
        <>
          <StyledTooltipContent visible={isVisible}>
            {tooltipContent}
          </StyledTooltipContent>
        </>
      )}
    </StyledTooltipContainer>
  );
};

export default Tooltip;
