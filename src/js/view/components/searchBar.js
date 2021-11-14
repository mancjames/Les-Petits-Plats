/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { Filter } from './filters'

export function SearchBar() {}

SearchBar.prototype.searchListener = function () {
  const searchBar = document.getElementById('searchBar')
  const searchBarInput = document.getElementById('searchBarInput')
  const searchBarButton = document.getElementById('searchBarButton')
  const filterRow = document.getElementById('filterRow')
  const searchError = document.getElementById('searchError')
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
  })
  searchBarButton.addEventListener('click', () => {
    if (searchBarInput.value.length >= 3) {
      const filterElement = new Filter(searchBarInput.value)
      filterElement.createFilterElement()
    } else if (searchBarInput.value.length < 3) {
      filterRow.classList.remove('d-none')
      searchError.classList.remove('d-none')
    }
  })
}
