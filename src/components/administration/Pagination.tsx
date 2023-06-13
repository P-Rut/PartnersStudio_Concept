import React from "react"

const Pagination: React.FC<any> = ({
  inquiriesPerPage,
  totalInquiries,
  paginate,
  next,
  prev,
  currentPage,
}: any) => {
  const currPage = currentPage
  const pageNumbers = []
  let i = 1

  // for (let i = 1; i <= Math.ceil(totalInquiries / inquiriesPerPage); i++) {
  //   pageNumbers.push(i)
  // }

  while (i <= Math.ceil(totalInquiries / inquiriesPerPage)) {
    if (
      i <= 3 || //the first three pages
      i >= totalInquiries - 2 || //the last three pages
      (i >= currPage - 1 && i <= currPage + 1)
    ) {
      pageNumbers.push(i)
      i++
    } else {
      pageNumbers.push(<div>...</div>)

      i = i < currPage ? currPage - 1 : totalInquiries - 2
    }
  }

  return (
    <nav>
      <ul className="mt-10 inline-flex -space-x-px">
        <li>
          <button
            onClick={prev}
            className={` cursor-pointer px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 hover:text-indigo-900
            ${
              currPage === 1 &&
              "bg-gray-100 text-gray-200 hover:bg-gray-100 hover:text-gray-400 pointer-events-none"
            }
            `}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number: any) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={` cursor-pointer px-3 py-2 text-sm border border-gray-300 hover:bg-gray-300 hover:text-indigo-900 
              ${number === currPage && "bg-indigo-900 text-white"}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={next}
            className={` cursor-pointer px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 hover:text-indigo-900
            ${
              currPage === Math.ceil(totalInquiries / inquiriesPerPage) &&
              "bg-gray-100 text-gray-200 hover:bg-gray-100 hover:text-gray-400 pointer-events-none"
            }
            `}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
