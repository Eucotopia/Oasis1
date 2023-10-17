import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    endpoints: builder => ({
        getBlog: builder.query({
            query: () => '/user/ok',
        }),
        getBlogById: builder.query({
            query: (id: number) => `/blog/${id}`
        })
    }),
})

export const { useGetBlogQuery,useGetBlogByIdQuery } = blogApi
