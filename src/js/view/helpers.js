/* eslint-disable no-plusplus */

// function for creating elements depending on type

export const createDom = (tag, ...childs) => {
  const element = document.createElement(tag)
  childs.forEach((child) => {
    // appends text if string
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child)
      element.append(textNode)
      // appends if an HTML element such as <h2>
    } else if (child instanceof HTMLElement) {
      element.append(child)
      // appends objects of key, value such as 'class', 'col'
    } else if (child instanceof Object) {
      Object.entries(child).forEach(([key, value]) => {
        element.setAttribute(key, value)
      })
    }
  })
  return element
}
