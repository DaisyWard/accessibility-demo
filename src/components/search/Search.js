// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/search_role

import React from 'react'
import './search.css'

import searchPNG from '../../images/search.png'

const Search = () => {
  return (
    <div className='search-wrapper'>
      <form id='search' action='/search' method='get' role='search' aria-label='Sitewide'>
        <label className='sr-only' htmlFor='search-input'>Search</label>
        <input
          className='search-input'
          name='search-input'
          type='search'
          id='search-input'
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
          src={searchPNG}
        />
      </button>
    </div>
  )
}

export default Search
