import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RadioButton } from '../elements';

export default {
  title: 'Elements/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => <RadioButton { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    name: 'RadioButton',
    speed: 0.4
};

export const Disabled = Template.bind({});

Disabled.args = {
    name: 'RadioButton',
    disabled: true,
};
