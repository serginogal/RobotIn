import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from './index'

export default {
  title: 'components/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer />

export const Default = Template.bind({})
Default.args = {}
