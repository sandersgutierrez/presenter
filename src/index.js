'use strict'

import './index.css'

class GreetElement extends HTMLElement {
    constructor() {
        super()
    }
}

customElements.define('greet-element', GreetElement)

function render() {
    const h1 = document.createElement('h1')
    h1.innerText = 'Hello World!'
    const greetElement = new GreetElement()
    greetElement.append(h1)

    document.querySelector('#root').append(greetElement)
}

window.addEventListener('DOMContentLoaded', render)
