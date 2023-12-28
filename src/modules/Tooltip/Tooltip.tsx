import { useState } from "react";
import {
  StyledDescription,
  StyledDescriptionContainer,
  StyledDescriptionHeading,
  StyledTooltipContainer,
  StyledTooltipContent,
  StyledTooltipIcon,
} from "./styledComponents";

interface TooltipProps {
  tooltipContent?: string | JSX.Element;
  tooltipIcon?: JSX.Element;
  description?: string;
  descriptionHeading?: string;
}

const tooltipId = "2D5F8CB2-54AF-43FD-A4A9-2833E8869E93"

export const Tooltip = ({
    tooltipContent,
    tooltipIcon,
    description,
    descriptionHeading,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<Partial<DOMRect>>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  })

  return (
    <>
      {
        (description) && (
          <StyledDescriptionContainer>
            <StyledDescriptionHeading>
              {descriptionHeading}
            </StyledDescriptionHeading>
            <StyledDescription>
              {description}
            </StyledDescription>
          </StyledDescriptionContainer>
        )
      }
      <StyledTooltipContainer>
        <StyledTooltipIcon
          id={tooltipId}
          onMouseEnter={() => {
            // does not work well in iframes
            // https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning
            const tooltipParent = document.getElementById(tooltipId) as HTMLSpanElement;
            const newTooltipPosition = { ...tooltipParent.getBoundingClientRect().toJSON() };
            newTooltipPosition.top = (newTooltipPosition.top + window.scrollY) - (newTooltipPosition.height / 2) + 45;
            newTooltipPosition.left = (newTooltipPosition.left + window.scrollX) - (newTooltipPosition.width / 2) + 30;
            setTooltipPosition(newTooltipPosition);
            setIsVisible(true);
          }}
          onMouseLeave={() => {
              setIsVisible(false);
          }}
        >
          {tooltipIcon}
        </StyledTooltipIcon>
        {isVisible && (
          <StyledTooltipContent
            top={`${tooltipPosition.top}px`}
            right={`${tooltipPosition.right}px`}
            bottom={`${tooltipPosition.bottom}px`}
            left={`${tooltipPosition.left}px`}
          >
            {tooltipContent}
          </StyledTooltipContent>
        )}
      </StyledTooltipContainer>
    </>
  );
};

export default Tooltip;
