import { StoryFn, Meta } from '@storybook/react';
import { Button } from '../molecules';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Here we have the Button component coming in 3 variatons: round, text, and square.  Together, these buttons are not just a trio of choices; they're a symphony of user experience enhancements, each contributing its unique purpose to the usability of your UI design.`
      }
    },
  }
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonStory: StoryFn<typeof Button> = (args) => <Button { ...args }/>;

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