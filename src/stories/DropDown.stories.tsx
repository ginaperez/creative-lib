import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DropDown } from '../elements';

export default {
  title: 'Elements/Drop Down',
  component: DropDown,
} as Meta<typeof DropDown>;

const Template: StoryFn<typeof DropDown> = (args) => <DropDown { ...args }/>;

export const Default = Template.bind({});

const dropdownOptions = [
  {value: 'option1', label: 'Option 1'}
];

Default.args = {
    name: 'DropDown',
    label: 'Dropdown Label',
    placeholderText: 'Select',
    options: dropdownOptions,
};

export const MultipleSelect = Template.bind({});

MultipleSelect.args = {
    name: 'Mutliple',
    label: 'Multiple Select Label',
    // placeholderText: 'Select',
    // options: options,
    // value: selectedValue,
    multiple: true,
};
