import { render, screen } from '@testing-library/react'

import React from 'react'
import Link from './index'

describe('Form test', () => {

    it('Does Link have children?', () => {
        render(<Link>It's a link</Link>)
        
        const link = screen.getByText("It's a link")
        expect(link).toBeVisible()
    })
})