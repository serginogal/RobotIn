import { ComponentStory, ComponentMeta } from '@storybook/react'

import Hero from './index'

export default {
  title: 'components/Hero',
  component: Hero,
  argTypes: {},
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = args => <Hero />

export const Default = Template.bind({})
Default.args = {}
