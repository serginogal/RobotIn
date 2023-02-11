import { ComponentStory, ComponentMeta } from '@storybook/react'

import Home from './Home'

export default {
  title: 'views/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => <Home />

export const Default = Template.bind({})
Default.args = {}
