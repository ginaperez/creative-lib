import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaymentPortal } from '../prototypes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Prototypes/Payment Portal',
  component: PaymentPortal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof PaymentPortal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentPortal> = (args) => <PaymentPortal { ...args }/>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    headingText: 'Add a new card'
};
