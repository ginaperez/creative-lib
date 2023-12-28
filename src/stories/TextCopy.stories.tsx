import { StoryFn, Meta } from '@storybook/react';
import { TextCopy } from '../modules/';

export default {
  title: 'Modules/Text Copy',
  component: TextCopy,
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof TextCopy>;

const Template: StoryFn<typeof TextCopy> = (args) => <TextCopy { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    id: 'TextCopy',
    copyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique purus at rutrum gravida. Mauris tempor, enim in laoreet feugiat, magna nisl tincidunt orci, a hendrerit tortor metus iaculis urna. Mauris tincidunt pulvinar dignissim. Aliquam euismod, orci a molestie faucibus, magna lorem consequat lorem, sit amet mollis leo tortor nec.',
    label: 'Copy text label',
    descriptionHeading: 'Text Copy',
    description: 'This is description',
};
