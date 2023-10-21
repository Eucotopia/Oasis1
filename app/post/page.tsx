"use client"
import {PostDetail} from "@/features/post/PostDetail";
import {useGetBlogQuery} from "@/app/api/postApi";
import {Spinner} from "@nextui-org/react";

export default function BlogPage() {
    const {data:posts, isLoading, isFetching, isError} = useGetBlogQuery()
    if (isError) {
        return <Spinner/>
    }
    if (isLoading) {
        return <Spinner/>
    }
    return (
        <>
            <div className={isFetching ? 'posts--disabled' : ''}>
                {posts?.data.map((post)=>(
                    <PostDetail id={post.id}/>
                ))}
            </div>
        </>
    );
}
