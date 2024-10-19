import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { useUserStore } from '../store/useUserStore'

function Pagination({page,setPage}) { 
  const {pageInfo} = useUserStore();
  return (
    <ul className="inline-flex -space-x-px text-sm"> 
        <li>
          <button onClick={()=>setPage(page+1)} disabled={page==1} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${ page === 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}>
            <ChevronLeft />
          </button>
        </li>
        {
          
          [...new Array(pageInfo.total_pages).keys()].map(num=>(
            <li key={num}>
              <button onClick={()=>setPage(num+1)} className={`flex items-center justify-center px-3 h-8 leading-tight ${page === num+1 ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" } `}>{num+1}</button>
            </li>
          ))
        }
        <li>
          <button onClick={()=>setPage(page-1)} disabled={page===2} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${ page === 2 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}>
            <ChevronRight />
          </button>
        </li>
      </ul>
  )
}

export default Pagination
