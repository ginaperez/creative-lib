import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PaymentPortal } from '../prototypes';

export default {
  title: 'Prototypes/Payment Portal',
  component: PaymentPortal,
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof PaymentPortal>;

const Template: StoryFn<typeof PaymentPortal> = (args) => <PaymentPortal { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    headingText: 'Add a new card'
};