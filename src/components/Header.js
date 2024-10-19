import React, { useState } from 'react'
import { useUserStore } from '../store/useUserStore';
import { LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

function Header() {
    const [searchTerm,setSearchTerm]= useState("");
    const {filterSearch,logout,editItem} = useUserStore();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(editItem) return toast.error("please close update profile first");
        filterSearch(searchTerm);   
    }
  return (
    <div className="shadow-md flex justify-between p-4">
      <h1 className="text-slate-500 text-xl hidden sm:flex">User management</h1>    
        <div className="flex-1 justify-between sm:justify-end  flex gap-4">
            <form onSubmit={handleSubmit}>
                <input placeholder='search' className="rounded-lg text-center border-b-2 outline-none hover:shadow-md"  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            </form>
            <button>
                <LogOut onClick={logout}/>
            </button>
        </div>
    </div>
  )
}

export default Header
