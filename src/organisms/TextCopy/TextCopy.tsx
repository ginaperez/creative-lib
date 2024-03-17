import { useState } from "react";
import {
  StyledTextCopyContainer,
  StyledTextCopyButton,
  StyledCopyText,
  StyledCopyTooltip,
} from "./styledComponents";
import { StyledInputLabel } from "../../molecules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { StyledDescription, StyledDescriptionContainer, StyledDescriptionHeading } from "../Tooltip";

export interface TextCopyProps {
  id?: string;
  copyText: string;
  width?: number;
  label?: string;
  /**
   * Assigning a globally unique id to the tooltip is required so that
   * we can find and position it correctly in the document.
   */
  tooltipId: string;
  /**
   * Assigning a globally unique id to the copy button is required so that
   * we can find its position correctly in the document.
   */
  copyButtonId: string;
  tooltipTextInitial?: string;
  tooltipTextClicked?: string;
  description?: string;
  descriptionHeading: string;
}

const tooltipDefaultText = "Copy Text";
const tooltipCopiedText = "Copied!";

export const TextCopy = ({
    id,
    copyText,
    width,
    label,
    tooltipId,
    copyButtonId,
    tooltipTextInitial,
    tooltipTextClicked,
    description,
    descriptionHeading,
}: TextCopyProps) => {

  const [isVisible, setIsVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState(tooltipTextInitial || tooltipDefaultText);

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#examples
  const [tooltipPosition, setTooltipPosition] = useState<Partial<DOMRect>>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <>
      {
        description && (
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
      {label && <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>}
      <StyledTextCopyContainer
        id={id}
        onClick={() => {
          copyToClipboard();
          setTooltipText(tooltipTextClicked || tooltipCopiedText);
          setTimeout(() => {
            setTooltipText(tooltipTextInitial || tooltipDefaultText);
          }, 3000);
        }}
      >
        <StyledCopyText id="copyText" width={width}>
          {copyText}
        </StyledCopyText>
        <StyledTextCopyButton
          id={copyButtonId}
          onClick={() => {
            copyToClipboard();
          }}
          onMouseEnter={() => {
            // does not work well in iframes
            // https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning
            const copyButton = document.getElementById(copyButtonId) as HTMLButtonElement;
            const newTooltipPosition = { ...copyButton.getBoundingClientRect().toJSON() };
            newTooltipPosition.top = (newTooltipPosition.top + window.scrollY) - (newTooltipPosition.height / 2) - 10;
            newTooltipPosition.left = (newTooltipPosition.left + window.scrollX) - (newTooltipPosition.width / 2);
            setTooltipPosition(newTooltipPosition);
            setIsVisible(true);
          }}
          onMouseLeave={() => {
            setIsVisible(false);
          }}
        >
          <FontAwesomeIcon icon={faCopy} />
        </StyledTextCopyButton>
      </StyledTextCopyContainer>
      {isVisible && (
          <StyledCopyTooltip
            id={tooltipId}
            top={`${tooltipPosition.top}px`}
            right={`${tooltipPosition.right}px`}
            bottom={`${tooltipPosition.bottom}px`}
            left={`${tooltipPosition.left}px`}
          >
            {tooltipText}
          </StyledCopyTooltip>
       )}
    </>
  );
};
