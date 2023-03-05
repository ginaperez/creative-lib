import React from 'react';
import { Hyperlink } from '../components/Hyperlink';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/Hyperlink',
    component: Hyperlink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Hyperlink>;

  const Template: ComponentStory<typeof Hyperlink> = (args) => <Hyperlink {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    children: 'Hyperlink Story',
    link: 'www.google.com',
  };
