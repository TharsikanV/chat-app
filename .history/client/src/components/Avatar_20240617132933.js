import React from 'react'

const Avatar = ({userId,name,imageUrl,width,height}) => {
  return (
    <div>
        {
            imageUrl?(
                <img
                    src={ima}
                />
            )
        }
    </div>
  )
}

export default Avatar