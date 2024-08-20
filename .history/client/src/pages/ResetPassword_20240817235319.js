import { Link } from "react-router-dom";

const { useState } = require("react")

const ResetPassword=()=>{
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const handleOnChange=()=>{

    }
    const handleSubmit=()=>{

    }
    return (
        // <div className="row wrapper">
        //     <div className="col-10 col-lg-5">
        //         <form  className="shadow-lg">
        //             <h1 className="mb-3">New Password</h1>

        //             <div className="form-group">
        //                 <label htmlFor="password_field">Password</label>
        //                 <input
        //                     type="password"
        //                     id="password_field"
        //                     className="form-control"
        //                     value={password}
        //                     // onChange={e=>setPassword(e.target.value)}
        //                 />
        //             </div>

        //             <div className="form-group">
        //                 <label htmlFor="confirm_password_field">Confirm Password</label>
        //                 <input
        //                     type="password"
        //                     id="confirm_password_field"
        //                     className="form-control"
        //                     value={confirmPassword}
        //                     // onChange={e=>setConfirmPassword(e.target.value)}
        //                 />
        //             </div>

        //             <button
        //                 id="new_password_button"
        //                 type="submit"
        //                 className="btn btn-block py-3">
        //                 Set Password
        //             </button>

        //         </form>
        //     </div>
        // </div>
        <div className='mt-5'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
        <h3>Welcome to Chat app!</h3>
        <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>New Password :</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='enter your new password'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Confirm Password :</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='enter your confirm password'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={password}
              onChange={handleOnChange}
              required
            />
          </div>
          <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
            Register
          </button>
        </form>
        <p className='my-3 text-center'>Already have account ? <Link to={"/email"} className='hover:text-primary font-semibold'>Login</Link></p>
      </div>

    </div>
    )
}
export default ResetPassword