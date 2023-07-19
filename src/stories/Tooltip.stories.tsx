import React from 'react';
import { Tooltip } from '../components';
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

  export const Default = Template.bind({});
  Default.args = {
    tooltipContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut etiam.',
    tooltipIcon: <FontAwesomeIcon icon={faInfo} />,
  };