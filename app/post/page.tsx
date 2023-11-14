"use client"
import {useGetBlogQuery} from "@/app/api/postApi";
import {Spinner} from "@nextui-org/react";
import React from "react";
import {setPosts} from "@/features/post/postSlice";
import {useAppDispatch} from "@/hooks/store";
import PostList from "@/components/Music/PostList";

export default function PostPage() {
    const page = {
        page: 0,
        size: 21
    }
    const {data: posts, isLoading, isFetching, isError} = useGetBlogQuery(page)
    const dispatch = useAppDispatch()
    if (posts !== undefined) {
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
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-4xl text-center justify-center">
                    {
                        posts?.data.map((post) => {
                                return (
                                    <PostList blog={post}/>
                                )
                            })
                    }
                </div>
            </section>

            {/*{*/}
            {/*    posts?.data.map((post) => {*/}
            {/*            return (*/}
            {/*                <PostList post={post}/>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    )*/}
            {/*}*/}
        </>
    );
}
