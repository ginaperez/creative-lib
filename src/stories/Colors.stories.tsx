import { StoryFn, Meta } from '@storybook/react';
import { Colors } from '../atoms';

const primaryColors = [
  {name: "Primary", hex: "#146C94", textColor: "#FFFFFF"},
  {name: "Secondary", hex: "#19A7CE", textColor: "#000000"},
  {name: "Border", hex: "#E0E3E7", textColor: "#000000"},
];

const actionColors = [
  {name: "Success", hex: "#4CAF50", textColor: "#FFFFFF"},
  {name: "Warning", hex: "#FF9800", textColor: "#000000"},
  {name: "Error", hex: "#F44336", textColor: "#000000"},
  {name: "Disabled", hex: "#939393", textColor: "#FFFFFF"},
];

const darkModeColors = [
  {name: "Primary", hex: "#2F80ED", textColor: "#FFFFFF"},
  {name: "Secondary", hex: "#BB86FC", textColor: "#FFFFFF"},
  {name: "Accent", hex: "#9C27B0", textColor: "#FFFFFF"},
]

export default {
  title: 'Design System/Components/Colors',
  component: Colors,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof Colors>;

const Template: StoryFn<typeof Colors> = (args) => <Colors { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    colors: primaryColors,
    heading: 'Default'
};

export const Action = Template.bind({});

Action.args = {
  colors: actionColors,
  heading: 'Action'
};

export const DarkMode = Template.bind({});

DarkMode.args = {
  colors: darkModeColors,
  heading: 'Dark Mode'
}
