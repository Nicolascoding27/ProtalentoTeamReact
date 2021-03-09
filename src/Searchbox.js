import React from 'react';
const SearchBox = ( {searchfield,searchChange}) => {
    return (
        <div className='pa2'>
        <input 
        className='pa3 ba b--red bg-washed-red'
        type='search'  
        placeholder="search people" 
        onChange={searchChange}/>
        
        </div>
    )
}
export default SearchBox;