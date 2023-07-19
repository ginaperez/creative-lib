import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropDown } from '../elements';
import { MenuOption } from '../elements/DropDown/MenuOption';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Drop Down',
  component: DropDown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof DropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDown> = (args) => <DropDown { ...args }/>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    name: 'DropDown',
    placeholderText: 'Select',
    children: 
    <>
      <MenuOption>Select</MenuOption>
      <MenuOption>2nd</MenuOption>
    </>
};
