import { ComponentStory, ComponentMeta } from '@storybook/react'

import BatteryLevel from './index'

export default {
  title: 'components/BatteryLevel',
  component: BatteryLevel,
  argTypes: {
    batteryLevel: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
  },
} as ComponentMeta<typeof BatteryLevel>

const Template: ComponentStory<typeof BatteryLevel> = args => (
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <BatteryLevel {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  batteryLevel: 10,
  isCharging: false,
}
