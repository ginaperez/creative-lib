import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropDown } from '../components/DropDown';
import { MenuOption } from '../components/DropDown/MenuOption';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/DropDown',
  component: DropDown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof DropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDown> = (args) => <DropDown { ...args }/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    name: 'DropDown',
    placeholder: 'Select...',
    children: <MenuOption>Select</MenuOption>
};
