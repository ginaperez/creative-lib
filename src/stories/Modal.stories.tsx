import React from 'react';
import { Modal } from '../modules/Modal/Modal';
import { ModalHeader } from '../modules/Modal/ModalHeader';
import { ModalBody } from '../modules/Modal/ModalBody'
import { ModalFooter } from '../modules/Modal/ModalFooter';
import { Button } from '../components/OldButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque."
};