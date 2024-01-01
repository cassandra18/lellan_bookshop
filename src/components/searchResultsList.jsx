import React from 'react'
import "../css/searchResultsList.css"
import SearchResult from './searchResult';

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return <SearchResult result={result} key={id}/>;
      })}
    </div>
  )
}

export default SearchResultsList;
