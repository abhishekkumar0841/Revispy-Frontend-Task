import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loggedInToken:"",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser: (state, action)=>{
            state.user = action.payload
        },
        loggedInToken: (state, action)=>{
            state.loggedInToken = action.payload
        },
        logout: (state)=>{
            state.loggedInToken = "",
            state.user = null
        }
    }
})

export const {setUser, loggedInToken, logout} = authSlice.actions;
export default authSlice.reducer;