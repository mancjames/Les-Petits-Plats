/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { Filter } from './filters'

export function SearchBar() {}

SearchBar.prototype.searchListener = function () {
  const searchBar = document.getElementById('searchBar')
  const searchBarInput = document.getElementById('searchBarInput')
  const searchBarButton = document.getElementById('searchBarButton')
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
  })
  searchBarButton.addEventListener('click', () => {
    const filterElement = new Filter(searchBarInput.value)
    filterElement.createFilterElement()
  })
}
