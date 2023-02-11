import { ComponentStory, ComponentMeta } from '@storybook/react'

import DarkModeToggle from './index'

export default {
  title: 'components/DarkModeToggle',
  component: DarkModeToggle,
  argTypes: {},
} as ComponentMeta<typeof DarkModeToggle>

const Template: ComponentStory<typeof DarkModeToggle> = args => (
  <DarkModeToggle {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isDark: false,
}
