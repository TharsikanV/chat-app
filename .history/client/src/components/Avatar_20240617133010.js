import React from 'react'

const Avatar = ({userId,name,imageUrl,width,height}) => {
  return (
    <div>
        {
            imageUrl?(
                <img
                    src={imageUrl}
                    width={width}
                    height={he}
                />
            )
        }
    </div>
  )
}

export default Avatar