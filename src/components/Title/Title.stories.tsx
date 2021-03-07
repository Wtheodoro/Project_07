import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Title from './index'
import { TitleProps } from './index'

export default {
    title: 'Title',
    component: Title
} as Meta

const Template: Story<TitleProps> = (args) => <Title {...args} />

export const ButtonText = Template.bind({})
ButtonText.args = {
    children: 'Vou-me embora pra Pasárgada ',
    fontSize: '36px',
    width: ''
}