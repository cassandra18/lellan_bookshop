import React from 'react'
import { FaSearch } from "react-icons/fa"

import "../css/searchBar.css"
const SearchBar = () => {
  return (
    <div className='search-wrapper'>
      <FaSearch className='searchIcon'/>
      <input placeholder='Searching for...' className='input-field'/>
    </div>
  )
}

export default SearchBar
