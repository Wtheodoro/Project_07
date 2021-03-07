import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Link from './index'
import { LinkProps } from './index'

export default {
    title: 'Link',
    component: Link
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const ButtonText = Template.bind({})
ButtonText.args = {
    children: 'link',
}