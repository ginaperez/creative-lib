import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonX } from '../components/ButtonX';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ButtonX',
  component: ButtonX,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof ButtonX>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonX> = (args) => <ButtonX { ...args }/>;

export const X = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
X.args = {
    onClick: () => { alert('dumb i s chuck')}
};

// export const ButtonText = Template.bind({});
// ButtonText.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
