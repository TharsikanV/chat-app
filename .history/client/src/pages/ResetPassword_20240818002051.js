import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ResetPassword=()=>{
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const {token}=useParams();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('password',password);
        formData.append('confirmPassword',confirmPassword);
        //just for trying
        const URL =`${process.env.REACT_APP_BACKEND_URL}/api/password/reset/$token`;
        try {
            const Response=await axios.post(URL,formData)
            toast.success(Response?.data.message)
      
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    return (
        <div className='mt-5'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
        <h3>Welcome to Chat app!</h3>
        <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>New Password :</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='enter your new password'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Confirm Password :</label>
            <input
              type='password'
              id='confirm-password'
              name='confirm-password'
              placeholder='enter your confirm password'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={confirmPassword}
              onChange={e=>setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
            Set Password
          </button>
        </form>
      </div>

    </div>
    )
}
export default ResetPassword