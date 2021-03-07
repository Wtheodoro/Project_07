import { render, screen } from '@testing-library/react'

import React from 'react'
import Unity from './index'

describe('Is Header okay?', () => {

    it('Will testemony work?', () => {
        render(<Unity unityTitle="Testing unity" backgroundColor="red">Unity children</Unity>)
        
        const title = screen.getByText('Testing unity')
        const children = screen.getByText('Unity children')

        expect(title).toHaveTextContent('Testing unity')
        expect(children).toHaveTextContent('Unity children')
    })
})