import React from 'react'
import './search.css'

import searchPNG from '../../images/search.png'

const Search = () => {

  return (
    <div className='search-wrapper'>
      <form id='search' action='/search' method='get' role='search'>
        <label className='sr-only' htmlFor='goose'>Search</label>
        <input
          className='search-input'
          name='Search'
          type='search'
          id='goose'
          autoComplete='off'
        />
      </form>

      <button
        className='search-button'
        type='submit'
        form='search'
      >
        <img
          className='search-icon'
          alt='Sitewide search'
          src={searchPNG}  />
      </button>
    </div>
  )
}

export default Search
