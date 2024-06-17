import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const user=useSelector(state=>state.user)

  console.log

  const fetchUserDetails = async()=>{ 
    try {
      const URL =`${process.env.REACT_APP_BACKEND_URL}/api/user-details`
      const response =await axios({
          url:URL,
          withCredentials:true
        })
        console.log("current user Details",response)
    } catch (error) {
      console.log("error",error)
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  },[])

  return (
    <div>
      Home
      {/* message component*/}
      <section>
        <Outlet/>
      </section>

    </div>
  )
}

export default Home