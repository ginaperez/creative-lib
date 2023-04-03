import React from 'react';
import {
    StyledToggleSwitchLabel,
    StyledToggleSwitchInput,
    // StyledToggleSwitchBall,
} from './styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export const ToggleSwitch = () => {
    return (
        <div>
            <StyledToggleSwitchInput type="checkbox" id="checkbox" />
            <StyledToggleSwitchLabel>
                <FontAwesomeIcon icon={faSun} />
                <FontAwesomeIcon icon={faMoon} />
                {/* <StyledToggleSwitchBall /> */}
            </StyledToggleSwitchLabel>
        </div>
    )
}