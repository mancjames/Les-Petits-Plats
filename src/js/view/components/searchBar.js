/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { Filter } from './filters'

export function SearchBar() {}

SearchBar.prototype.searchListener = function () {
  const searchBar = document.getElementById('searchBar')
  const searchBarInput = document.getElementById('searchBarInput')
  searchBar.addEventListener('submit', (e) => {
    // eslint-disable-next-line no-console
    const filterElement = new Filter(searchBarInput.value)
    filterElement.createFilterElement()
    e.preventDefault()
  })
}
