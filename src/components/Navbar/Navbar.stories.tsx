import { ComponentStory, ComponentMeta } from '@storybook/react'

import Navbar from './index'

export default {
  title: 'components/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  toggleDarkMode: () => alert('Toggle'),
}
