import { render, screen } from '@testing-library/react'

import React from 'react'
import Title from './index'

describe('Title test', () => {

    it('Does Title have children?', () => {
        render(<Title>It's a title</Title>)
        
        const link = screen.getByText("It's a title")
        expect(link).toBeVisible()
    })
})