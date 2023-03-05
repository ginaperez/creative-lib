import React from 'react';
import { Modal } from '../modules/Modal';
import { Button } from '../components/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    modalContent: <div>this is the text</div>,
    modalButton: <Button label="Press for modal" />,
    modalButtonVisible: true,
    modalButtonLabel: 'Press here',
};