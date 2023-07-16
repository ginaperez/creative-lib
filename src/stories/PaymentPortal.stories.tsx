import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaymentPortal } from '../components/PaymentPortal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Payment Portal',
  component: PaymentPortal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof PaymentPortal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentPortal> = (args) => <PaymentPortal { ...args }/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    headingText: 'Add a new card'
};
