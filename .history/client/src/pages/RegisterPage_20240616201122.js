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
        <from className='grid gap-4 '>
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
        <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email :</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='enter your email' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary'
                  value={data.email}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='password'>Password :</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='enter your password' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary'
                  value={data.password}
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