/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { view } from './js/view/view'
import { init } from './js/controller'
import { ingredientWithNoDuplicates } from './js/modal/optionsFromData'

// import {
//   ingredientWithNoDuplicates,
//   deviceWithNoDuplicates,
//   utensilWithNoDuplicates,
// } from './js/modal/optionsFromData'

init()

console.log(ingredientWithNoDuplicates)
