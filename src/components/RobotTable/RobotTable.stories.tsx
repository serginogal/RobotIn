import { ComponentStory, ComponentMeta } from '@storybook/react'

import RobotTable from './index'
import ROBOTS from '../../../public/_data/robots.json'

export default {
  title: 'components/RobotTable',
  component: RobotTable,
  argTypes: {},
} as ComponentMeta<typeof RobotTable>

const Template: ComponentStory<typeof RobotTable> = args => (
  <RobotTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isLoading: false,
  error: null,
  robots: ROBOTS.content as RobotData[],
  searchData: () => alert('search'),
}
export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  error: null,
  robots: null,
}
export const Error = Template.bind({})
Error.args = {
  isLoading: false,
  error: { message: 'This is a sample error' } as Error,
  robots: null,
}
export const Empty = Template.bind({})
Empty.args = {
  isLoading: false,
  error: null,
  robots: [],
}
