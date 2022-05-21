import React from 'react'

function SearchArea(props) {
  return (
    <div className='search-area'>
        <form onSubmit={props.searchBook}>
            <input type="text"
            onChange={props.handleSearch}
            />
            <button type='btn'>Search</button>
            <select defaultValue='Sort' onChange={props.handleSort}>
                <option value="Sort">Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </form>
    </div>
  )
}

export default SearchArea