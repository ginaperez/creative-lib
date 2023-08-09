import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextArea } from '../elements';

export default {
  title: 'Elements/Text Area',
  component: TextArea,
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args) => <TextArea { ...args }/>;

export const Default = Template.bind({});

Default.args = {
  id: 'textarea',
  placeholder: 'Type something...',
  labelText: 'Label for Text Area',
};
