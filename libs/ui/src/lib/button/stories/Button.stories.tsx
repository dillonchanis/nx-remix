import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../src/Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Click Me',
  type: 'button',
  isDisabled: false,
  isLoading: false,
}
