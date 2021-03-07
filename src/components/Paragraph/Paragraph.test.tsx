import { render, screen, fireEvent } from '@testing-library/react'

import React from 'react'
import Paragraph from './index'

describe('Form test', () => {

    it('Does Paragraph have children?', () => {
        render(<Paragraph>It's a Paragraph</Paragraph>)
        
        const p = screen.getByText("It's a Paragraph")
        expect(p).toBeVisible()
    })
})