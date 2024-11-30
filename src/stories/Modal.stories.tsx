import { StoryFn, Meta } from '@storybook/react'
import { Modal } from '../organisms'

export default {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})

Default.args = {
  bodyContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.',
  modalButtonText: 'Click for Modal',
}
