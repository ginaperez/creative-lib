import { StoryFn, Meta } from '@storybook/react'
import { TextCopy } from '../organisms'

export default {
  title: 'Text Copy',
  component: TextCopy,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextCopy>

const Template: StoryFn<typeof TextCopy> = (args) => <TextCopy {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'TextCopy',
  copyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique purus at rutrum gravida. Mauris tempor, enim in laoreet feugiat, magna nisl tincidunt orci, a hendrerit tortor metus iaculis urna. Mauris tincidunt pulvinar dignissim. Aliquam euismod, orci a molestie faucibus, magna lorem consequat lorem, sit amet mollis leo tortor nec.',
  label: 'Copy text label',
  descriptionHeading: 'Text Copy',
  description: 'This is the description',
  copyButtonId: 'f10537bc-dcd1-4f22-83e5-01724a26d847',
  tooltipId: '7983131f-3491-480a-a103-80fa3a84d804',
}
