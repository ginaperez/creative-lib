import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from '../molecules';

export default {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button is a component designed to seamlessly adapt to various states within a user interface. The default state is a rounded button with configurable text and onClick event. Other optional variants include Buttons with square edges for an alternate appearance, and a plain text option for a more minimalist look. Setting the type will update the variant.'
      }
    },
  }
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox { ...args }/>;

export const Default = Template.bind({});

Default.args = {
    id: 'Check',
    name: 'Checkbox',
    label: 'Checkbox label'
};
