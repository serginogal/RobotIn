import { ComponentStory, ComponentMeta } from '@storybook/react'

import StatusIndicator from './index'

export default {
  title: 'components/StatusIndicator',
  component: StatusIndicator,
  argTypes: {},
} as ComponentMeta<typeof StatusIndicator>

const Template: ComponentStory<typeof StatusIndicator> = args => (
  <StatusIndicator {...args} />
)

export const Available = Template.bind({})
Available.args = {
  status: 'AVAILABLE',
}
export const InUse = Template.bind({})
InUse.args = {
  status: 'IN-USE',
}
export const Offline = Template.bind({})
Offline.args = {
  status: 'OFFLINE',
}
