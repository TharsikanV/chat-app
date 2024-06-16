import React, { useState } from 'react'

const RegisterPage = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    password : "",
    profile_pic : ""
  })
  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
          ...preve,
          [name] : value
      }
    })
  }

  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-sm  rounded overflow-hidden p-4 mx-2'>
        <h3>Welcome to Chat app!</h3>
        <from >
        <div  className='flex flex-col gap-1'>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='enter your name'
            className='bg-slate-100 px-2 py-1 focus:outline-primary'
            value={data.name}
            onChange={handleOnChange}
            required
          />
        </div>
      </from>
      </div>
     
    </div>
  )
}

export default RegisterPage