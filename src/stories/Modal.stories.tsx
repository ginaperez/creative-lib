import React from 'react';
import { Modal } from '../modules';
import { StoryFn, Meta } from '@storybook/react';

export default {
    title: 'Modules/Modal',
    component: Modal,
    tags: ['autodocs'],
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args}/>;

export const Default = Template.bind({});
Default.args = {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.",
};