import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Heading } from '../foundation';

export default {
  title: 'Foundation/Headings',
  component: Heading,
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = (args) => <Heading { ...args }/>;

export const Headings = Template.bind({});

Headings.args = {
    h1Text: "H1 Heading",
    h2Text: "H2 Heading",
    h3Text: "H3 Heading",
    h4Text: "H4 Heading",
    h5Text: "H5 Heading",
    h6Text: "H6 Heading",
};

