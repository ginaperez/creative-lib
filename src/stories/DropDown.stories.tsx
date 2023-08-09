import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DropDown } from '../elements';

export default {
  title: 'Elements/Drop Down',
  component: DropDown,
} as Meta<typeof DropDown>;

const Template: StoryFn<typeof DropDown> = (args) => <DropDown { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    name: 'DropDown',
    labelText: 'Dropdown Label',
    placeholderText: 'Select',
    children: <option>Hello World!</option>
};

export const MultipleSelect = Template.bind({});

MultipleSelect.args = {
    name: 'Mutliple',
    labelText: 'Multiple Select Label',
    // placeholderText: 'Select',
    // options: options,
    // value: selectedValue,
    multiple: true,
};
