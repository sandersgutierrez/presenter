'use strict'

import Reveal from 'reveal.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
import RevealZoom from 'reveal.js/plugin/zoom/zoom.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'

const reveal = document.createElement('div')
reveal.classList.add('reveal')

const slides = document.createElement('div')
slides.classList.add('slides')

const slide = `
<section>
    <h2>Hello World</h2>
</section>
<section>
    <h2>Hello World</h2>
</section>
<section>
    <h2>Hello World</h2>
</section>
`

slides.innerHTML += slide

document.body.appendChild(reveal).appendChild(slides)

let deck = new Reveal({
    plugins: [RevealZoom, RevealMarkdown, RevealHighlight],
})
deck.initialize()
