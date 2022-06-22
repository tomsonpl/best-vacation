import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BaseButton } from './Button'

export default {
  title: 'Example/Button',
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args}>{args.children}</BaseButton>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'SZUKAJ',
  variant: 'contained',
  color: 'success',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  variant: 'outlined',
  color: 'success',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'yttt',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Button',
}
