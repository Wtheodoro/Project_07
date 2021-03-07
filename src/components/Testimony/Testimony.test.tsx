import { render, screen } from '@testing-library/react'

import React from 'react'
import Testimony from './index'

describe('Is Header okay?', () => {

    it('Will testemony work?', () => {
        render(<Testimony/>)
        
        const name = screen.getByText('Walison Teodoro')
        const pro = screen.getByText('Front-end Developer')
        const img = screen.getByTestId('img')

        expect(name).toHaveTextContent('Walison Teodoro')
        expect(pro).toHaveTextContent('Front-end Developer')
        expect(img).toHaveAttribute('src')
    })
})