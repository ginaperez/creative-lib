import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Elements/Inputs',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input { ...args }/>;

export const TextField = Template.bind({});

TextField.args = {
    id: 'text-input',
    type: 'text',
    placeholder: 'Type something...',
    labelText: 'Text Input Label',
    width: "20rem",
};

export const PasswordField = Template.bind({});

PasswordField.args = {
    id: 'password-input',
    type: 'password',
    placeholder: 'Enter password',
    labelText: 'Password Input Label',
    width: '20rem;',
};

export const WithIcon = Template.bind({});

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

Disabled.args = {
    id: 'diabled-input',
    type: 'text',
    placeholder: 'Disabled text',
    disabled: true,
    labelText: 'Disabled Input Label',
    width: '20rem;',
};