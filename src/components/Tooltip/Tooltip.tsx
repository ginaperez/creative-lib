import React, { useState } from "react";
import {
  StyledTooltipContainer,
  StyledTooltipContent,
  StyledTooltipIcon,
} from "./styledComponents";
// import './tooltip.css';

interface TooltipProps {
  tooltipContent?: string;
  tooltipIcon?: JSX.Element;
}

export const Tooltip = ({
    tooltipContent,
    tooltipIcon
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [tooltipClassName, setTooltipClassName] = useState('');

  return (
    <StyledTooltipContainer >
      <StyledTooltipIcon
        onMouseEnter={() => {
          // setTooltipClassName('tooltip-fade-in');
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          // setTooltipClassName('tooltip-fade-out');
          setTimeout(() => {
            setIsVisible(false);
            // setTooltipClassName('');
          }, 1000);
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
