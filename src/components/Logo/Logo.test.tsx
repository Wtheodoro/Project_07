import { render, screen, fireEvent } from '@testing-library/react'

import React from 'react'
import Logo from './index'

describe('Form test', () => {

    it('Does Link have children?', () => {
        render(<Logo/>)
        
        const allPartLogo = screen.getAllByTestId('part-logo')
        expect(allPartLogo[0]).toBeInTheDocument()
        expect(allPartLogo[1]).toBeInTheDocument()
    })
})