import React from 'react';
import { Modal } from '../modules/Modal';
import { ModalHeader } from '../modules/ModalHeader';
import { ModalBody } from '../modules/ModalBody'
import { ModalFooter } from '../modules/ModalFooter';
import { Button } from '../components/OldButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    content: 
    <div>
        <ModalHeader 
            content="this is the header"
        />
        <ModalBody
            content="Quisque scelerisque magna a commodo varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse eget dui lacus. Nulla ac dapibus ex. Ut ullamcorper placerat eros, non scelerisque neque dignissim eget. Cras a risus at purus consectetur efficitur eu at lorem."
        />
        <ModalFooter
            content={
                <div>
                    <Button label="Modal button" />
                </div>
            }
        />
    </div>,
    modalButton: <Button label="Press for modal" />
};