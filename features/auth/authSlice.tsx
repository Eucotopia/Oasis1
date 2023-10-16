import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {User} from '@/types'
import type {RootState} from '@/app/store'

const user:User = {
    token: '',
    username: '',
    email: '',
    id: 0,
}

const LoginSlice = createSlice({
    name: 'auth',
    initialState: user,
    reducers: {
        setCredentials: (state,action: PayloadAction<User>) => {
            console.log("执行了")
            state.token = action.payload.token
            state.username = action.payload.username
            state.email = action.payload.email
            state.id = action.payload.id
        },
    },
})

export const {setCredentials} = LoginSlice.actions

export default LoginSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth
