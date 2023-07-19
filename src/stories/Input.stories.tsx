import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Inputs',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input { ...args }/>;

export const TextField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextField.args = {
    id: 'text-input',
    type: 'text',
    placeholder: 'Type something...',
    labelText: 'Text Input Label',
    width: "20rem",
};

export const PasswordField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PasswordField.args = {
    id: 'password-input',
    type: 'password',
    placeholder: 'Enter password',
    labelText: 'Password Input Label',
    width: '20rem;',
};

// export const RequiredField = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// RequiredField.args = {
//     type: 'text',
//     placeholder: 'Type something...',
//     required: true,
//     hasLabel: true,
//     labelText: 'Required Input Label'
// };

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
    id: 'withIcon-input',
    type: 'text',
    placeholder: 'With icon',
    disabled: false,
    labelText: 'Input with Icon',
    width: '20rem;',
    icon: <FontAwesomeIcon icon={faCreditCard} />
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
    id: 'diabled-input',
    type: 'text',
    placeholder: 'Disabled text',
    disabled: true,
    labelText: 'Disabled Input Label',
    width: '20rem;',
};