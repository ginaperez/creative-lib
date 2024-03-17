import { StoryFn, Meta } from '@storybook/react';
import { PaymentPortal } from '../prototypes';

export default {
  title: 'Design System/Components/Payment Portal',
  component: PaymentPortal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof PaymentPortal>;

const Template: StoryFn<typeof PaymentPortal> = (args) => <PaymentPortal { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    headingText: 'Add a new card'
};
