import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MessagePage = () => {
  const params = useParams()
  const socketConnection=useSelector(state)
  console.log("params",params.userId)

  useEffect(()=>{

  },[])
  return (
    <div>MessagePage</div>
  )
}

export default MessagePage