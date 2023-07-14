import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Button,
  TextButton,
  ButtonX
} from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonPrimary: ComponentStory<typeof Button> = (args) => <Button { ...args }/>;
const ButtonText: ComponentStory<typeof TextButton> = (args) => <TextButton { ...args }/>;
const ButtonClose: ComponentStory<typeof ButtonX> = (args) => <ButtonX { ...args }/>;

export const Primary = ButtonPrimary.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 'Button',
    onClick: () => { alert('dumb i s chuck')}
};

export const Text = ButtonText.bind({});
Text.args = {
  children: 'Text Button',
  onClick: () => { alert('Text Clicked')}
};

export const Close = ButtonClose.bind({});
Close.args = {
  onClick: () => { alert('X Clicked')},
};
