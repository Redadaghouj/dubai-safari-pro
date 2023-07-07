import React from 'react';
import './pagination.css';

function Pagination({ currentPage, setCurrentPage, pages }) {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className='pagination'>
      <div className='container'>
        <button
          disabled={currentPage === 1}
          className='page prev'
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <i className='fa-solid fa-arrow-left-long'></i>
        </button>
        {generatedPages.map((page) => (
          <div
            key={page}
            className={currentPage === page ? 'page active' : 'page'}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
        <button
          disabled={currentPage === pages}
          className='page next'
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <i className='fa-solid fa-arrow-right-long'></i>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
