import { render, screen } from '@testing-library/react'

import React from 'react'
import Header from './index'

describe('Is Header okay?', () => {

    it('Does All link have content?', () => {
        render(<Header/>)
        
        const linkAbout = screen.getByText('About')
        const linkHelp = screen.getByText('Help')
        const linkFeatures = screen.getByText('Features')
        const linkSignup = screen.getByText('Signup')

        expect(linkAbout).toHaveTextContent('About')
        expect(linkHelp).toHaveTextContent('Help')
        expect(linkFeatures).toHaveTextContent('Feature')
        expect(linkSignup).toHaveTextContent('Signup')
    })
})