import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Dialog } from '../modules/';

export default {
  title: 'Modules/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => <Dialog { ...args }/>;

export const Default = Template.bind({});

Default.args = {
  bodyContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Scelerisque felis imperdiet proin fermentum leo vel orci porta.',
  dialogButtonText: 'Click for Dialog',
};
