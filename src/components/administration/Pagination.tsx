import React from "react"

const Pagination: React.FC<any> = ({
  inquiriesPerPage,
  totalInquiries,
  paginate,
  next,
  prev,
  currentPage,
}: any) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalInquiries / inquiriesPerPage); i++) {
    pageNumbers.push(i)
  }
  const currPage = currentPage

  return (
    <nav>
      <ul className="mt-10 inline-flex -space-x-px">
        <li>
          <a
            onClick={prev}
            className={` cursor-pointer px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 hover:text-indigo-900
            ${
              currPage === 1 &&
              "bg-gray-100 text-gray-400 hover:bg-gray-100 hover:text-gray-400 pointer-events-none"
            }
            `}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className={` cursor-pointer px-3 py-2 text-sm border border-gray-300 hover:bg-gray-300 hover:text-indigo-900 
              ${number === currPage && "bg-indigo-900 text-white"}`}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={next}
            className={` cursor-pointer px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 hover:text-indigo-900
            ${
              currPage === pageNumbers.length &&
              "bg-gray-100 text-gray-400 hover:bg-gray-100 hover:text-gray-400 pointer-events-none"
            }
            `}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
