import { createSlice } from '@reduxjs/toolkit'

const initialState = {loggedIn:true}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveSession: (state, action) => {
            state.loggedIn= action.payload.loggedIn
        },
        setLogoutSession: (state) => {
            state.loggedIn = false
        }
    }
});

export const { setActiveSession, setLogoutSession } = userSlice.actions
export const selectLoggedIn = (state) => state.user.loggedIn
export default userSlice.reducer