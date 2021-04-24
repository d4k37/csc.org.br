import React, { useState, useEffect } from "react"
import { Link, navigate, withPrefix } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import { BiCaretDown } from "@react-icons/all-files/bi"

const range = (start, end, length = end - start) =>
  Array.from({ length }, (_, i) => start + i)

const Pagination = ({ previousPage, nextPage, page, totalPages, entryUri }) => {
  const [selectedPage, setSelectedPage] = useState(page)

  useEffect(() => {
    if (page !== selectedPage) {
      navigate(
        parseInt(selectedPage) === 1
          ? `/${entryUri}`
          : `/${entryUri}/p${selectedPage}`
      )
    }
  }, [selectedPage, page, entryUri])

  return (
    <div className="flex justify-between items-center py-16" data-aos="fade-in">
      {previousPage ? (
        <Link
          to={withPrefix(previousPage)}
          className={`${tailwindCommon.transition} ${tailwindCommon.hover}`}
          aria-label="Next page"
        >
          Back
        </Link>
      ) : (
        <span className="opacity-50">Back</span>
      )}

      <div className="flex items-center">
        Page
        <div className="relative flex items-center ml-1 mr-2">
          <select
            className="pl-1 pr-3 border-none appearance-none bg-gray-300 cursor-pointer"
            aria-label="Choose page number"
            value={selectedPage}
            onChange={e => setSelectedPage(e.target.value)}
            onBlur={e => setSelectedPage(e.target.value)}
          >
            {range(0, totalPages).map(i => (
              <option key={i} value={i + 1}>{`${i + 1}`}</option>
            ))}
          </select>
          <BiCaretDown className="absolute right-0 pointer-events-none" />
        </div>
        {`of ${totalPages}`}
      </div>

      {nextPage ? (
        <Link
          to={withPrefix(nextPage)}
          className={`${tailwindCommon.transition} ${tailwindCommon.hover}`}
          aria-label="Next page"
        >
          Next
        </Link>
      ) : (
        <span className="opacity-50">Next</span>
      )}
    </div>
  )
}

export default Pagination
