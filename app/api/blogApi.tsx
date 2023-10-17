import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {BaseQueryMeta, BaseQueryResult} from "@reduxjs/toolkit/src/query/baseQueryTypes";
export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    endpoints: builder => ({
        // `getStudents` endpoint 是一个返回数据的 “Query” 操作
        getBlog: builder.query({
            query: () => '/all/blog',
        }),
        getBlogById: builder.query({
            query: (id: number) => `/blog/${id}`
        })
    }),
})

export const { useGetBlogQuery,useGetBlogByIdQuery } = blogApi
