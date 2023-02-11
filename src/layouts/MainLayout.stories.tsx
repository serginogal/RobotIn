import { Container } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MainLayout from './MainLayout'

export default {
  title: 'layout/MainLayout',
  component: MainLayout,
  argTypes: {},
} as ComponentMeta<typeof MainLayout>

const Template: ComponentStory<typeof MainLayout> = args => (
  <MainLayout {...args}>
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
      }}
    >
      Content
    </main>
  </MainLayout>
)

export const Default = Template.bind({})
Default.args = {}
