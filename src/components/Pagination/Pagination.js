import React from 'react'

export default function Pagination({productsPerPage , totalProducts , paginate , currentPage}) {
    const pageNumber = [];
    for (let index = 1; index <= Math.ceil(totalProducts / productsPerPage); index++) {
        pageNumber.push(index);
        
    }
    
    return (
        <nav className='d-flex justify-content-center'>
            <ul className='pagination'>
                {
                    pageNumber.map((number)=>{
                        const activeClass = currentPage === number ? 'active' : '';
                        return <li key={number} className={`page-item ${activeClass}`} onClick={()=>paginate(number)}>
                            <a href='!#' className="page-link">
                                {number}
                            </a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
