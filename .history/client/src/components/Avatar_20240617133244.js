import React from 'react'

const Avatar = ({userId,name,imageUrl,width,height}) => {
  return (
    <div className='text-slate-'>
        {
            imageUrl?(
                <img
                    src={imageUrl}
                    width={width}
                    height={height}
                    alt={name}
                />
            ) :(
                name?(
                    <div>

                    </div>
                ) :(
                    <PiUserCircle
                        size={80}
                    />
                )
            )
        }
    </div>
  )
}

export default Avatar