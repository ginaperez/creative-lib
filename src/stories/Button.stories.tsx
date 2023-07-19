import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../elements';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonStory: ComponentStory<typeof Button> = (args) => <Button { ...args }/>;

export const Default = ButtonStory.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: 'Button',
    onClick: () => { alert('Default Clicked')},
};

export const Text = ButtonStory.bind({});
Text.args = {
  children: 'Text Button',
  onClick: () => { alert('Text Clicked')},
  type: 'text'
};

export const Square = ButtonStory.bind({});
Square.args = {
  children: 'Square',
  onClick: () => { alert('Square Clicked')},
  type: 'square'
};