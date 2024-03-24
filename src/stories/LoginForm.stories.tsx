import { StoryFn, Meta } from '@storybook/react';
import { LoginForm } from '../prototypes';

export default {
  title: 'Design System/Prototypes/Login Form',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm />;

export const Default = Template.bind({});

// Default.args = {
//     headingText: 'Add a new card'
// };