import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchUser = () => {
    const [searchUser,setSearchUser]=useState([])
    const [loading,setLoading]=useState(false)

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40 p-2'>
        <div className='w-full max-w-lg mx-auto mt-10 '>
            {/* input search user */}
            <div className='bg-white rounded h-14 overflow-hidden flex'>
                <input
                    type='text'
                    placeholder='Search user by name,email....'
                    className='w-full outline-none py-1 h-full px-2'
                />
                <div className='h-14 w-14 flex justify-center items-center'>
                    <IoSearchOutline
                        size={25}
                    />
                </div>
            </div>
            {/* display search user */}
            <div className='bg-'>

            </div>
        </div>
    </div>
  )
}

export default SearchUser