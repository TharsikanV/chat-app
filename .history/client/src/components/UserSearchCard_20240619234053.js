import React from 'react'
import Avatar from './Avatar'

const UserSearchCard = ({ user }) => {
  return (
    <div className='flex items-center gap-3 p-2 '>
      <div>
        <Avatar
          width={50}
          height={50}
          name={user?.name}
        />
      </div>

      <div>
        <div className='font-semibold'> 
          {user?.name}
        </div>
        <p className='text-sm'>{user?.email}</p>
      </div>

    </div>
  )
}

export default UserSearchCard