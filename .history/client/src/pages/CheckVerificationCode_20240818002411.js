import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios';
import toast from 'react-hot-toast';
import { PiUserCircle} from "react-icons/pi";
import Avatar from '../components/Avatar';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/userSlice';

const CheckVerificationCode = () => {
  // const [data, setData] = useState({
  //   code: "",
  //   userId : ""
  // })
  const navigate = useNavigate()
  const location =useLocation()
  const dispatch=useDispatch()

  const sendToken = async (data) =>{
    const URL =`${process.env.REACT_APP_BACKEND_URL}/api/password/forgot`
    try {
      const response = await axios.post(URL, data)
      toast.success(response?.data.message)
      
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  
  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>

        <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
         
          <Avatar
            width={70}
            height={70}
            name={location?.state?.name}
            imageUrl={location?.state?.profile_pic}
          />
          <h2 className='font-semibold text-lg mt-1'>{location?.state?.name}</h2>
        </div>
        <h3>Welcome to Chat app!</h3>
          <div className='flex flex-col gap-1'>
            <p>Click here for send URL to your email</p>
          </div>
          <button onClick={() => sendToken(location?.state)} className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
            Send URL
          </button>
      </div>
    </div>
  )
}
export default CheckVerificationCode