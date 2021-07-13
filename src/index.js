/* eslint-disable no-plusplus */
// // Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

function createElement({ name, attrs, content }) {
  const el = document.createElement(name)

  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i]
    el.setAttribute(attr[0], attr[1])
  }

  el.innerHTML = content

  return el
}

const helloWorld = createElement({
  name: 'h2',
  attrs: [['class', 'display-1']],
  content: 'Hello world',
})

document.body.appendChild(helloWorld)
