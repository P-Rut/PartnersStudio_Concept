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
  const pageNumbers: any = []

  for (let i = 1; i <= Math.ceil(totalInquiries / inquiriesPerPage); i++) {
    if (
      i === 1 ||
      i === Math.ceil(totalInquiries / inquiriesPerPage) ||
      (i >= currPage - 1 && i <= currPage + 1)
    ) {
      pageNumbers.push(i)
    } else if (
      pageNumbers[pageNumbers.length - 1] !== "..." &&
      i !== currPage
    ) {
      pageNumbers.push("...")
    }
  }

  return (
    <nav className="fixed bottom-10 w-30 ">
      <ul className="mt-10 inline-flex -space-x-px">
        <li>
          <button
            disabled={currPage === 1}
            onClick={prev}
            className={`h-10 font-light border border-indigo-900
            px-4 hover:bg-indigo-900 hover:text-white
            ${
              currPage === 1 &&
              " text-gray-200  hover:bg-gray-100 hover:text-gray-400 pointer-events-none"
            }
            `}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number: any) => (
          <li key={number}>
            <button
              key={number}
              onClick={() => paginate(number)}
              className={` hover:bg-indigo-200 hover:text-white cursor-pointer h-10 border  border-indigo-900
              w-10
              ${number === currPage && "bg-indigo-900 text-white"}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={next}
            className={` font-light cursor-pointer h-10 border  border-indigo-900
               px-4 hover:bg-indigo-900 hover:text-white
            ${
              currPage === Math.ceil(totalInquiries / inquiriesPerPage) &&
              " text-gray-200 hover:bg-gray-100 hover:text-gray-400 pointer-events-none"
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
