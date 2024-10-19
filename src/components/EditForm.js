import { CircleX } from 'lucide-react';
import React, { useState } from 'react'
import { useUserStore } from '../store/useUserStore';

function EditForm({editItem}) {
    const {setEditItem,updateUser,loading} = useUserStore();
    const {first_name,last_name,email} = editItem;
    const [inputs,setInputs] = useState({first_name,last_name,email});

    const handleChange = (e)=>{
        setInputs({...inputs,[e.target.id] : e.target.value});
   }

    const handleUpdate = (e)=>{
         e.preventDefault();
         console.log(inputs);
         updateUser(editItem.id,inputs);
    }
  return (
    <div className='p-3 mx-auto fixed w-4/5 sm:w-1/2 lg:w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-red-500  flex items-center flex-col py-4 rounded-lg'>
        <CircleX className="size-8 absolute top-2 right-2 cursor-pointer" onClick={()=>setEditItem(null)}/>
    <h1 className='text-3xl text-center font-semibold my-7'>update</h1>
    <form onSubmit={handleUpdate} className='flex flex-col gap-4'>
            <input
                type='text'
                placeholder='first name'
                className='border p-3 rounded-lg'
                id='first_name'
                value = {inputs.first_name}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='last name'
                className='border p-3 rounded-lg'
                id='last_name'
                value = {inputs.last_name}
                onChange={handleChange}
            />
            <input
                type='email'
                placeholder='email'
                className='border p-3 rounded-lg'
                id='email'
                value={inputs.email}
                onChange={handleChange}
            />

            <button
                disabled = {loading}
                className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
            >
             {loading ? 'Loading...' : 'update'}
            </button>
    </form>
</div>
  )
}

export default EditForm
