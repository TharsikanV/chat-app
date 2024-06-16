import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const RegisterPage = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    password : "",
    profile_pic : ""
  })
  const [uploadPhoto,setUploadPhoto] = useState("")
  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
          ...preve,
          [name] : value
      }
    })
  }

  const handleUploadPhoto=(e)=>{
    const file=e.target.files[0]

    setUploadPhoto(file)
  }

  const handleClearUploadPhoto=()=>{
    setUploadPhoto(null)
  }
  console.log('uploadPhoto',uploadPhoto)

  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-sm  rounded overflow-hidden p-4 mx-2'>
        <h3>Welcome to Chat app!</h3>
        <from className='grid gap-4 mt-5'>
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
              <div className='flex flex-col gap-1'>
                <label htmlFor='profile_pic'>Photo :
                <div className='h-14 bg-slate-200 flex justify-center items-center rounded border hover:border-primary cursor-pointer'>
                  <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>
                    {
                      uploadPhoto?.name ? uploadPhoto?.name : "Upload profile photo"
                    }
                  </p>
                  {
                    uploadPhoto.name &&()
                  }
                  <button className='text-lg ml-2 hover:text-red-600' onClick={handleClearUploadPhoto}>
                    <IoClose/>
                  </button>
                </div>
                </label>
                
                <input
                  type='file'
                  id='profile_pic'
                  name='profile_pic'
                  className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
                  onChange={handleUploadPhoto}
                />
              </div>
      </from>
      </div>
     
    </div>
  )
}

export default RegisterPage