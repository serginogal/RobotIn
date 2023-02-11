import { ComponentStory, ComponentMeta } from '@storybook/react'

import LocationLink from './index'

export default {
  title: 'components/LocationLink',
  component: LocationLink,
  argTypes: { venue: { control: 'object' } },
} as ComponentMeta<typeof LocationLink>

const Template: ComponentStory<typeof LocationLink> = args => (
  <LocationLink {...args} />
)

export const Default = Template.bind({})
Default.args = {
  venue: {
    location: 'Nakano Station, Nakano, Tokyo, Japan',
    coordinates: [35.7058, 139.6658],
    description: 'Nakano Station',
    venueName: 'Nakano Station',
    city: 'Tokyo',
    country: 'Japan',
  },
}
