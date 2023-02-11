import { ComponentStory, ComponentMeta } from '@storybook/react'

import BatteryIndicator from './index'

export default {
  title: 'components/BatteryIndicator',
  component: BatteryIndicator,
  argTypes: {
    batteryLevel: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
  },
} as ComponentMeta<typeof BatteryIndicator>

const Template: ComponentStory<typeof BatteryIndicator> = args => (
  <BatteryIndicator {...args} />
)

export const Default = Template.bind({})
Default.args = {
  batteryLevel: 10,
  isCharging: false,
}
