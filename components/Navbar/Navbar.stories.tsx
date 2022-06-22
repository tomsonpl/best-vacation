import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Navbar } from './Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'stary text',
}
export const Primary = Template.bind({})
Primary.args = {
  text: 'nowy text',
}
