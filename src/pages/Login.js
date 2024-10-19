import React, { useState } from 'react'

function Login() {

    const [inputs,setInputs] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e)=>{
         setInputs({...inputs,[e.target.id] : e.target.value});
    }

    const handleSubmit = ()=>{

    }

    const [loading,error] = [true,"true"];
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>login</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type='email'
        placeholder='email'
        className='border p-3 rounded-lg'
        id='email'
        value={inputs.email}
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        className='border p-3 rounded-lg'
        id='password'
        value = {inputs.password}
        onChange={handleChange}
      />

      <button
        disabled={loading}
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
        {!loading ? 'Loading...' : 'login'}
      </button>
    </form>
    {error && <p className='text-red-500 mt-5'>{error}</p>}
  </div>
  )
}

export default Login
