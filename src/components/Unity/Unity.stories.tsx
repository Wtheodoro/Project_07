import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Unity from './index'
import { UnityProps } from './index'
import LockGirl from '../../components/svgs/LockGirl';


export default {
    title: 'Unity',
    component: Unity
} as Meta

const Template: Story<UnityProps> = (args) => <Unity {...args} />

export const ButtonText = Template.bind({})
ButtonText.args = {
    unityTitle: 'Incenso fosse música',
    children: 'isso de querer ser exatamente aquilo que a gente é ainda vai nos levar além',
    backgroundColor: '#87CEFA',
    svg: <LockGirl/>,
}