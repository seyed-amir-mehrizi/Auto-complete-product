import React, { useState } from 'react'

export default function AutoComplete({getSearchTitle}) {

    const handleSearchTitle = (e) =>{
        getSearchTitle(e.target.value);
    }
    return (
        <div className='d-flex justify-content-center mt-2'>
            <input type="text" className='form-control w-50'
            placeholder='Search The Product ...'
            onChange={handleSearchTitle}
            />
        </div>
    )
}
