import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchInput from './index'

export default {
  title: 'components/SearchInput',
  component: SearchInput,
  argTypes: {},
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onSearch: () => alert('search'),
}
