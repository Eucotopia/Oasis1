import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {UserResponse} from "@/app/api/authApi";
import {RootState} from "@/app/store";

export interface Blog {
    title:string,
    content:string,
    summary:string,
    coverImage:string
}

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.user?.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: builder => ({
        getBlog: builder.query({
            query: () => '/user/ok',
        }),
        getBlogById: builder.query({
            query: (id: number) => `/blog/${id}`
        }),
        addBlog: builder.mutation<UserResponse<string>, Blog>({
            query: (blog) => ({
                url: '/blog',
                method: 'POST',
                body: blog,
            })
        }),
    }),
})

export const {useGetBlogQuery, useGetBlogByIdQuery,useAddBlogMutation} = blogApi
