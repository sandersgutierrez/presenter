'use strict'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <h1>Slides Presenter</h1>
        <ul>
            <li>First Slide</li>
        </ul>
    </StrictMode>
)
