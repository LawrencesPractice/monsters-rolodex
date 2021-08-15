import React from 'react';
import './search-box.styles.css'
//fuctional compennt to get props and  rendexr some html

export const SearchBox = ({ palceholder, handleChange}) => (
    <input
        className='search'
        type='search'
        placeholder='search monsers'
        onChange={ handleChange}
    />
)