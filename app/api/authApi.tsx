import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from '../store'

export interface User {
    id: number
    email: string
    username: string
    token: string
}

/**
 * 返回的数据格式
 */
export interface UserResponse {
    code: string
    data: User
    message: string
}

export interface LoginRequest {
    email: string
    password: string
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/user/',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.user?.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        protected: builder.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    }),
})

export const {useLoginMutation, useProtectedMutation} = authApi
