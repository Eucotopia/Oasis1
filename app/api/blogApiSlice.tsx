import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query";
export const blogApiSlice = createApi({
    // 唯一标识
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
        getPost: builder.query({
            query: (id) => `/posts/${id}`,
        }),
    }),
})
export const {useGetPostsQuery,useGetPostQuery} = blogApiSlice;