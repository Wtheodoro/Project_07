import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Paragraph from './index'
import { ParagraphProps } from './index'

export default {
    title: 'Paragraph',
    component: Paragraph
} as Meta

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />

export const ButtonText = Template.bind({})
ButtonText.args = {
    children: 'No meio do caminho tinha uma pedra tinha uma pedra no meio do caminho tinha uma pedra no meio do caminho tinha uma pedra. Nunca me esquecerei desse acontecimento na vida de minhas retinas tão fatigadas. Nunca me esquecerei que no meio do caminho tinha uma pedra tinha uma pedra no meio do caminho no meio do caminho tinha uma pedra.',
    fontSize: '18px',
    width: '350px'
}