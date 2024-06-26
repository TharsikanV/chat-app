import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MessagePage = () => {
  const params = useParams()
  console.log("params",params.userId)

  useEffect(()=>{

  },[])
  return (
    <div>MessagePage</div>
  )
}

export default MessagePage