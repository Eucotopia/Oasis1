import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from '../store'

export interface UserV0 {
    id: number
    email: string
    username: string
    token: string
}

export interface User {
    id: number
    email: string
    username: string
    password: string
}


export interface UserResponse {
    code: string
    data: UserV0
    message: string
}

export interface LoginRequest {
    email: string
    password: string
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/user',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.user?.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        // 用户登录
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        // 根据 ID 获取用户
        getUserById: builder.query<User, number>({
            query: (id) => ({url: `/${id}`}),
        }),
        getOk: builder.query<string,void>({
            query: () => ({url: '/ok'})
        })
    }),
})

export const {useLoginMutation, useGetUserByIdQuery,useGetOkQuery} = authApi
