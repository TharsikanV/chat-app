import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MessagePage = () => {
  const params = useParams()
  const socketConnection=useSe
  console.log("params",params.userId)

  useEffect(()=>{

  },[])
  return (
    <div>MessagePage</div>
  )
}

export default MessagePage