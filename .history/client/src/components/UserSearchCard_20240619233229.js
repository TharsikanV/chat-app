import React from 'react'
import Avatar from './Avatar'
import userDetails from '../../../server/controller/userDetails'

const UserSearchCard = ({user}) => {
  return (
    <div>
      <Avatar
        width={50}
        height={50}
        name={user.name}
      />
    </div>
  )
}

export default UserSearchCard