import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { WeatherCard } from './WeatherCard'

export default {
  title: 'Components/WeatherCard',
  component: WeatherCard,
} as ComponentMeta<typeof WeatherCard>

const Template: ComponentStory<typeof WeatherCard> = (args) => (
  <WeatherCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  borderColor: 'rgba(128, 128, 128, 1)',
}
export const Primary = Template.bind({})
Primary.args = {
  borderColor: 'red',
}
export const Secondary = Template.bind({})
Secondary.args = {
  borderColor: 'blue',
}
