import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {ResultResponse,Post} from "@/types";
import {RootState} from "@/app/store";


export interface Page {
    page:number,
    size:number
}

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.user?.token
            console.log(token)
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: builder => ({
        getBlog: builder.query<ResultResponse<Post[]>,Page>({
            query: (page:Page) => `/post/${page.page}/${page.size}`,
        }),
        getBlogById: builder.query<ResultResponse<Post>,number>({
            query: (id: number) => `/post/${id}`
        }),
        addBlog: builder.mutation<ResultResponse<string>, Post>({
            query: (post) => ({
                url: '/post',
                method: 'POST',
                body: post,
            })
        }),
    }),
})

export const {useGetBlogQuery, useGetBlogByIdQuery,useAddBlogMutation} = postApi
