import { StoryFn, Meta } from '@storybook/react';
import { Button } from '../elements';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button is a component designed to seamlessly adapt to various states within a user interface. The default state is a rounded button with configurable text and onClick event. Other optional variants include Buttons with square edges for an alternate appearance, and a plain text option for a more minimalist look. Setting the type will update the variant.'
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