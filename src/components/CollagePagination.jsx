import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const CollagePagination = ({ 
    postsPerPage, 
    totalPosts, 
    Paginate, 
    currentPage, 
    setCurrentPage
}) => {
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit]= useState(0);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const handlePrevious = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          if (currentPage <= minPageNumberLimit + 1) {
            setMaxPageNumberLimit(maxPageNumberLimit - 5);
            setMinPageNumberLimit(minPageNumberLimit - 5);
          }
        }
      };
    
      const handleNext = () => {
        if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
          setCurrentPage(currentPage + 1);
          if (currentPage >= maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + 5);
            setMinPageNumberLimit(minPageNumberLimit + 5);
          }
        }
      };
    
    // console.log(currentPage,(Math.ceil(totalPosts / postsPerPage)))
  return (

    <nav>
        <ul className="pagination" key='pagintation-list'>
        <Link 
            className="page-link" 
            onClick={handlePrevious}
            // disabled={currentPage == pageNumbers[0] ? true : false}
            aria-label="Previous"
        >
            <span aria-hidden="true">&laquo;</span>
        </Link>
            {pageNumbers.map(number => {
                if( number <= maxPageNumberLimit  && number > minPageNumberLimit){
                    return(
                        <li className="page-item" key={number}>
                        <Link 
                            onClick={() => Paginate(number)}  
                            className={`page-link ${currentPage === number ? 'active' : ''}`}
                        >
                            {number}
                        </Link>
                    </li>
                    )
                }
                else (null)
            })}
        <Link 
            className="page-link" 
            // onClick={() => Paginate(currentPage + 1)}
            onClick={handleNext}
            disabled={currentPage == Math.ceil(totalPosts / postsPerPage)} 
            aria-label="Next"
        >
            <span aria-hidden="true">&raquo;</span>
        </Link>
        </ul>
    </nav>
    
  )
  

}

export default CollagePagination