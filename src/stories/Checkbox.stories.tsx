import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from '../elements/';

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    name: 'Checkbox'
};
