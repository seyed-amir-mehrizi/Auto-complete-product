import React from 'react'

export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage }) {
    const pageNumber = [];
    for (let index = 1; index <= Math.ceil(totalProducts / productsPerPage); index++) {
        pageNumber.push(index);

    }

    return (
        <nav className='d-flex justify-content-center' data-testid="pagination-navbar">
            <ul className='pagination flex-wrap'>
                {
                    pageNumber.map((number, i) => {
                        const activeClass = currentPage === number ? 'active' : '';
                        return <li key={number} className={`m-1 page-item ${activeClass}`}
                            onClick={() => paginate(number)}>
                            <a href='!#' className="page-link" data-testid={`anchor-item`}>
                                {number}
                            </a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
