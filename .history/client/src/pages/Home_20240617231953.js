import React from 'react'
import { Outlet } from 'react-router-dom';

const Home = () => {
  const fetchUserDetails = async
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