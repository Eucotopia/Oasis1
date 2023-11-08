"use client"
import {useGetBlogQuery} from "@/app/api/postApi";
import {Spinner} from "@nextui-org/react";
import React from "react";
import {PostList} from "@/features/post/PostList";
import {setPosts} from "@/features/post/postSlice";
import {useAppDispatch} from "@/hooks/store";

export default function PostPage() {
    const page = {
        page: 0,
        size: 8
    }
    const {data: posts, isLoading, isFetching, isError} = useGetBlogQuery(page)
    const dispatch = useAppDispatch()
    if (posts!==undefined){
        dispatch(setPosts(posts))
    }
    // console.log(posts?.data)
    if (isError) {
        return <Spinner/>
    }
    if (isLoading) {
        return <Spinner/>
    }

    return (
        <>
            {
                posts?.data.map((post) => {
                        return (
                            <PostList post={post}/>
                        )
                    }
                )
            }
        </>
    );
}
