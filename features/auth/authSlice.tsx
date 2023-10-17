import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/app/api/authApi'
import type { RootState } from '@/app/store'

type AuthState = {
    user: User | null
}

const slice = createSlice({
    name: 'auth',
    initialState: { user: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { data } }: PayloadAction<{ data: User }>
        ) => {
            state.user = data
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
