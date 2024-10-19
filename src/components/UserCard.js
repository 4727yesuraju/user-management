import {  Pencil, Trash } from 'lucide-react';
import React from 'react'
import { useUserStore } from '../store/useUserStore';

function UserCard({item}) {
  
  const {deleteUser,setEditItem,editItem} = useUserStore();

  return (
    <div className="flex flex-col w-80 items-center ">
      <div className="flex justify-between w-full px-2 items-center">
        <div>
            <h2>{item.first_name}</h2>
            <h2>{item.last_name}</h2>
        </div>
        <div className="flex items-center gap-2">
           <button onClick={()=>setEditItem(item)} >
            <Pencil size="18" className={`${editItem && "cursor-not-allowed"}`}/>
           </button>
           <button onClick={()=>deleteUser(item.id)}>
             <Trash size="18" className={`${editItem && "cursor-not-allowed"}`}/>
           </button>
        </div>
      </div>
      <div className="w-full h-4/6 overflow-hidden rounded-lg">
          <img alt="avatar" src={item.avatar} className="w-full h-full object-cover hover:scale-110 duration-300" />
      </div>
    </div>
  )
}

export default UserCard
