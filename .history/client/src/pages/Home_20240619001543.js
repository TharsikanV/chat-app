import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout, setUser } from '../redux/userSlice';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()


  const fetchUserDetails = async()=>{ 
    try {
      const URL =`${process.env.REACT_APP_BACKEND_URL}/api/user-details`
      const response =await axios({
          url:URL,
          withCredentials:true
        })

        dispatch(setUser(response.data.data))

        if(response.data.logout){
          dispatch(logout())
          navigate("/email")
        }
        // console.log("current user Details",response)
    } catch (error) {
      console.log("error",error)
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  },[])

  console.log("location",location)
  const basePath
  return (
    <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
      <section className='bg-white'>
        <Sidebar/>
      </section>
      {/* message component*/}
      <section className={``}>
        <Outlet/>
      </section>

    </div>
  )
}

export default Home