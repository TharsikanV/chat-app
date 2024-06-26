import React from 'react'
import {useParams} from 'react-router-dom'

const MessagePage = () => {

  const params=useParams()
  console.log("pa")
  return (
    <div>MessagePage</div>
  )
}

export default MessagePage