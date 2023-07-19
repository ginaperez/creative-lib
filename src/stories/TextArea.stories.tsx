import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from '../elements';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Text Area',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea { ...args }/>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  id: 'textarea',
  placeholder: 'Type something...',
  labelText: 'Label for Text Area',
};
