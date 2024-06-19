import React from 'react'
import Avatar from './Avatar'

const UserSearchCard = ({ user }) => {
  return (
    <div>
      <div>
        <Avatar
          width={50}
          height={50}
          name={user?.name}
        />
      </div>

      <div>
        <div>
          {user/.name}
        </div>
      </div>

    </div>
  )
}

export default UserSearchCard