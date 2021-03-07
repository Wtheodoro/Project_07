import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from './index'
import { BtnProps } from './index'

export default {
    title: 'Button',
    component: Button
} as Meta

const Template: Story<BtnProps> = (args) => <Button {...args} />

export const ButtonText = Template.bind({})
ButtonText.args = {
    children: 'não aperte',
    backgroundColor: '#c4302b',
    textColor: 'white',
    icon: true,
    shadow: true
}