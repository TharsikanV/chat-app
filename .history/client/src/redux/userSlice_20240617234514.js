import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id:"",
  name:"",
  email:"",
  profile_pic:"",
  token:""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser:(state,action)=>{
        state._id=action.payload.
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer