import React from "react";
import { Menu } from "../elements";
import { StoryFn, Meta } from "@storybook/react";

const mockMenu = [
  { menuItem: "Profile" },
  { menuItem: "Account" },
  { menuItem: "Logout" },
];

export default {
  title: "Elements/Menu",
  component: Menu,
  tags: ['autodocs'],
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  menu: mockMenu,
};
