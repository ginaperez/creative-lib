import React, { useState } from 'react';

interface TooltipProps {
    tooltipContent?: string;
    tooltipIcon?: JSX.Element;
}

export const Tooltip = ({
    tooltipContent,
    tooltipIcon,
    ...props
}: TooltipProps ) => {
    const [ isActive, setIsActive ] = useState(false);

    return (
        <div className="tooltip-container">
             <div
                className="tooltip-icon"
                onMouseEnter={() => { setIsActive(true) }}
                onMouseLeave={() => { setIsActive(false) }}
             >
                {tooltipIcon}
            </div>
            {
                isActive && (
                    <div>
                        <div className="tooltip-content-container">
                            {tooltipContent}
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Tooltip;