import React, { useState } from 'react'
import { useUserStore } from '../store/useUserStore';

function Header() {
    const [searchTerm,setSearchTerm]= useState("");
    const {filterSearch} = useUserStore();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(searchTerm); 
        filterSearch(searchTerm);   
    }
  return (
    <div className="shadow-md flex justify-between p-4 ">
      <h1 className="text-slate-500 text-xl">User management</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='search' className="border-b-2 outline-none hover:shadow-md"  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      </form>
    </div>
  )
}

export default Header
