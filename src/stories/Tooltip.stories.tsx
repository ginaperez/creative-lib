import React from 'react';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof Tooltip>;

  const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

  export const First = Template.bind({});
  First.args = {
    tooltipContent: 'Add',
    tooltipIcon: <FontAwesomeIcon icon={faInfo} />,
  };