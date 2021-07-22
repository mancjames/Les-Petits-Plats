/* eslint-disable no-plusplus */

// Creating elements with multiple classes
export function createElement({ name, attrs, content }) {
  const el = document.createElement(name)

  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i]
    el.classList.add(attr)
  }

  el.innerHTML = content

  return el
}

export const singleContainer = {
  name: 'div',
  attrs: ['container'],
  content: '',
}

export const singleRow = {
  name: 'div',
  attrs: ['row', 'my-4'],
  content: '',
}
