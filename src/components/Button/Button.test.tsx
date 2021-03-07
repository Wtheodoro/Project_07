import { render, screen, fireEvent } from '@testing-library/react'

import React from 'react'
import Button from './index'

describe('Form test', () => {

    it('Does Button have children?', () => {
        render(<Button>Button</Button>)
        
        const button = screen.getByText('Button')
        expect(button).toBeVisible()
    })
})