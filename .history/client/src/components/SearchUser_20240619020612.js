import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchUser = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0'>
        <div className='w-full max-w-md mx-auto mt-10'>
            {/* input search user */}
            <div className='bg-white rounded  overflow-hidden'>
                <input
                    type='text'
                    placeholder='Search user by name,email....'
                    className='w-full outline-none py-1 h-full px-2'
                />
                <div>
                    <IoSearchOutline/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchUser