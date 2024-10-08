import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchUser = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40'>
        <div className='w-full max-w-md mx-auto mt-10'>
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
        </div>
    </div>
  )
}

export default SearchUser