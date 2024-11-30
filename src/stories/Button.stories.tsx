import { StoryFn, Meta } from '@storybook/react'
import { Button } from '../molecules'

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
        component: `The Button component comes in 3 variations: round, text, and square.`,
      },
    },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonStory: StoryFn<typeof Button> = (args) => <Button {...args} />

const onClick = () => alert('Clicked')

export const Default = ButtonStory.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Button',
  onClick,
}

export const Text = ButtonStory.bind({})
Text.args = {
  children: 'Text Button',
  type: 'text',
  onClick,
}

export const Square = ButtonStory.bind({})
Square.args = {
  children: 'Square',
  type: 'square',
  onClick,
}
