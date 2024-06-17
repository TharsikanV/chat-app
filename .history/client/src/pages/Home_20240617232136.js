import axios from 'axios';
import React from 'react'
import { Outlet } from 'react-router-dom';

const Home = () => {
  const fetchUserDetails = async()=>{ 
    try {
      const response =await axios(
        {

        }
      )
    } catch (error) {
      
    }
  }
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