import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Testimony from './index'

export default {
    title: 'Testimony',
    component: Testimony
} as Meta

const Template: Story = (args) => <Testimony {...args} />

export const ButtonText = Template.bind({})
