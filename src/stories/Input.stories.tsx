import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Inputs',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input { ...args }/>;

export const TextField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextField.args = {
    type: 'text',
    placeholder: 'Type something...',
    labelText: 'Text Input Label'
};

export const PasswordField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PasswordField.args = {
    type: 'password',
    placeholder: 'Enter password',
    labelText: 'Password Input Label'
};

export const RequiredField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RequiredField.args = {
    type: 'text',
    placeholder: 'Type something...',
    required: true,
    labelText: 'Required Input Label'
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
    type: 'text',
    placeholder: 'Disabled text',
    disabled: true,
    labelText: 'Disabled Input Label'
};