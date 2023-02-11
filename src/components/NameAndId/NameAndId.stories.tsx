import { ComponentStory, ComponentMeta } from '@storybook/react'

import NameAndId from './index'

export default {
  title: 'components/NameAndId',
  component: NameAndId,
  argTypes: {},
} as ComponentMeta<typeof NameAndId>

const Template: ComponentStory<typeof NameAndId> = args => (
  <NameAndId {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'N10TestRobot-00037',
  id: 'X20WZ24',
}
