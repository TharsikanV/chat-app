import React from 'react'

const Avatar = ({userId,name,imageUrl,width,height}) => {

    let avatarName=""

    if(name){
        const splitName=name?.split(" ")

        if(splitName.length>1){
            avatarName=splitName[0][0]+
        }
    }

  return (
    <div className='text-slate-800'>
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
                        size={width}
                    />
                )
            )
        }
    </div>
  )
}

export default Avatar