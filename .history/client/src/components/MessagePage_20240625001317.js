import React from 'react'
import { useParams } from 'react-router-dom'

const MessagePage = () => {
  const params = useParams()
  console.log("params",params.jser)
  return (
    <div>MessagePage</div>
  )
}

export default MessagePage