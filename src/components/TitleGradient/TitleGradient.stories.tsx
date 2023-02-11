import { ComponentStory, ComponentMeta } from '@storybook/react'

import TitleGradient from './index'

export default {
  title: 'components/TitleGradient',
  component: TitleGradient,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof TitleGradient>

const Template: ComponentStory<typeof TitleGradient> = args => (
  <TitleGradient {...args}>{args?.children}</TitleGradient>
)

export const h1 = Template.bind({})
h1.args = {
  component: 'h1',
  variant: 'h1',
  children: 'This is a sample text',
}
export const h2 = Template.bind({})
h2.args = {
  component: 'h2',
  variant: 'h2',
  children: 'This is a sample text',
}
export const h3 = Template.bind({})
h3.args = {
  component: 'h3',
  variant: 'h3',
  children: 'This is a sample text',
}
export const caption = Template.bind({})
caption.args = {
  component: 'h6',
  variant: 'caption',
  children: 'This is a sample text',
}
