import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600'>
            <Na className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded' title='chat'>
                <IoChatbubbleEllipses
                    size={25}
                />
            </div>
            <div className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                <FaUserPlus
                    size={25}
                />
            </div>
        </div>

    </div>
  )
}

export default Sidebar