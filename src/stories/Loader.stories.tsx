import { StoryFn, Meta } from '@storybook/react';
import { Loader } from '../elements';

export default {
  title: 'Elements/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof Loader>;

const LoaderStory: StoryFn<typeof Loader> = (args) => <Loader { ...args }/>;

export const Default = LoaderStory.bind({});
Default.args = {
    variant: 'circle',
};

export const CustomColor = LoaderStory.bind({});
CustomColor.args = {
    variant: 'circle',
    color: `#D1D6EE`,
};

export const BarLoader = LoaderStory.bind({});
BarLoader.args = {
    variant: "bar",
}