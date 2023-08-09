import React from 'react';
import { Tooltip } from '../modules';
import { StoryFn, Meta } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'Modules/Tooltip',
    component: Tooltip,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    } as Meta<typeof Tooltip>;

  const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    tooltipContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut etiam.',
    tooltipIcon: <FontAwesomeIcon icon={faInfo} />,
  };