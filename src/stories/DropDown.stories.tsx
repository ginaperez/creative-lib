import { StoryFn, Meta } from '@storybook/react';
import { DropDown } from '../elements';

export default {
  title: 'Elements/Drop Down',
  component: DropDown,
  tags: ['autodocs'],
} as Meta<typeof DropDown>;

const Template: StoryFn<typeof DropDown> = (args) => <DropDown { ...args }/>;

export const Default = Template.bind({});

const dropdownOptions = [
  {value: 'option1', label: 'Option 1'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'},
  {value: 'option4', label: 'Option 4'}
];

Default.args = {
    label: 'Dropdown Label',
    placeholderText: 'Select',
    optionsArray: dropdownOptions,
};

export const MultipleSelect = Template.bind({});

MultipleSelect.args = {
    label: 'Multiple Select Label',
    optionsArray: dropdownOptions,
    // value: selectedValue,
    multiple: true,
};
