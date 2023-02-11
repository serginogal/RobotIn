import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logo from './index'

export default {
  title: 'components/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo />

export const Default = Template.bind({})
Default.args = {}
