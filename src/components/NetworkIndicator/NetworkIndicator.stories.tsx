import { ComponentStory, ComponentMeta } from '@storybook/react'

import NetworkIndicator from './index'

export default {
  title: 'components/NetworkIndicator',
  component: NetworkIndicator,
  argTypes: {},
} as ComponentMeta<typeof NetworkIndicator>

const Template: ComponentStory<typeof NetworkIndicator> = args => (
  <NetworkIndicator {...args} />
)

export const Default = Template.bind({})
Default.args = {
  networkConnected: true,
}
