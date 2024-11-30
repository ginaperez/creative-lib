import React from 'react'
import { Menu } from '../molecules'
import { StoryFn, Meta } from '@storybook/react'

const mockMenu = [{ menuItem: 'Profile' }, { menuItem: 'Account' }, { menuItem: 'Logout' }]

export default {
  title: 'Menu',
  component: Menu,
  tags: ['autodocs'],
} as Meta<typeof Menu>

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
  menu: mockMenu,
}
