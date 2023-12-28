import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Toggle } from '../elements/';

export default {
  title: 'Elements/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => <Toggle { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    name: 'Toggle',
    onChange: () => {},
};

export const Square = Template.bind({});

Square.args = {
    name: 'Toggle',
    onChange: () => {},
    square: true
};