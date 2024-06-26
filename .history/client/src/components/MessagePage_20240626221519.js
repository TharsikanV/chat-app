import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Avatar from './Avatar'

const MessagePage = () => {
  const params = useParams()
  const socketConnection=useSelector(state=>state?.user?.socketConnection)
  const user=useSelector(state=>state?.user)
  const [dataUser,setDataUser]=useState(
    {
      name:"",
      email:"",
      profile_pic:"",
      _id:"",
      online:false
    }
  )

  console.log("params",params.userId,user)

  useEffect(()=>{
    if(socketConnection){
      socketConnection.emit('message-page',params.userId)

      socketConnection.on('message-user',(data)=>{
        setDataUser(data)
      })
    }
  },[socketConnection,params?.userId])
  return (
    <div>
      <header className='sticky top-0 h-16 bg-white'>
        <div className='flex items-center gap-4'>
          <div>
            <Avatar
              width={50}
              height={50}
              imageUrl={dataUser?.profile_pic}
              name={dataUser?.name}
              userId={dataUser?._id}
            />
          </div>
          <div>
            <h3 className='font-semibold text-lg my-0'>{dataUser?.name}</h3>
            <p className='-my-2'>
              {
                dataUser.online?<span className='text-primary'>online</span>:"offline"
              }
            </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default MessagePage