import { Tooltip } from '../organisms'
import { StoryFn, Meta } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Tooltip>

const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  tooltipContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor.',
  tooltipIcon: <FontAwesomeIcon icon={faInfo} />,
  description: 'This is the description of the component',
  descriptionHeading: 'Tooltip',
  tooltipId: '851991c1-baf4-4665-9241-bb29671e55ee',
}
