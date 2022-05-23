import { PaginationProps } from '@/types/pagination'

const Pagination: React.FC<PaginationProps> = ({ prev, next, last, first, currentPage }) => {
  return (
    <nav className="mt-8 text-sm">
      <ul className="flex justify-center">
        <li onClick={first}>
          <span className="cursor-pointer block py-2 px-3 ml-0 leading-tight rounded-l-lg border border-gray-900 bg-gray-700 text-gray-50">&laquo; First</span>
        </li>
        <li onClick={prev}>
          <span className="cursor-pointer block py-2 px-3 ml-0 leading-tight border border-x-0 border-gray-900 bg-gray-700 text-gray-50">&laquo; Prev</span>
        </li>
        <li>
          <span className="block py-2 px-3 leading-tight bg-gray-700 border border-gray-900 text-gray-50">{currentPage}</span>
        </li>
        <li onClick={next}>
          <span className="cursor-pointer block py-2 px-3 leading-tight bg-gray-700 border border-x-0 border-gray-900 text-gray-50">Next &gt;</span>
        </li>
        <li onClick={last}>
          <span className="cursor-pointer block py-2 px-3 leading-tight rounded-r-lg bg-gray-700 border border-gray-900 text-gray-50">Last &raquo;</span>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
