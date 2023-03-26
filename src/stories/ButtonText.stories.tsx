import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonText } from '../components/ButtonText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ButtonText',
  component: ButtonText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof ButtonText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonText> = (args) => <ButtonText { ...args }/>;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
    children: 'Button',
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
