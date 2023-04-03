import React from 'react';
import { ToggleSwitch } from '../components/ToggleSwitch';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/ToggleSwitch',
    component: ToggleSwitch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof ToggleSwitch>;

  const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch />;

  export const First = Template.bind({});
  First.args = {
    
  };