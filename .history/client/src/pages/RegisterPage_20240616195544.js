import React from 'react'

const RegisterPage = () => {
  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-sm  rounded overflow-hidden p-4 mx-auto'>
        <h3>Welcome to Chat app!</h3>
      </div>
      <from>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='enter your name'
            className='bg-slate-100 px-2 py-1 focus:outline-primary'
          />
        </div>
      </from>
    </div>
  )
}

export default RegisterPage