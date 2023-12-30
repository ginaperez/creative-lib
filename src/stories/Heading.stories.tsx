import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Heading } from '../atoms';

export default {
  title: 'Design System/Components/Headings',
  component: Heading,
  tags: ['autodocs'],
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = (args) => <Heading { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    h1Text: "H1 Heading",
    h2Text: "H2 Heading",
    h3Text: "H3 Heading",
    h4Text: "H4 Heading",
    h5Text: "H5 Heading",
    h6Text: "H6 Heading",
};

