import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from '../components/TextArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TextArea',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea { ...args }/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    placeholder: 'Type something...'
};
