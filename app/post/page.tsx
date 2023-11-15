"use client"
import {useGetBlogQuery, useGetPostCountQuery} from "@/app/api/postApi";
import {Pagination, Spinner} from "@nextui-org/react";
import React, {useEffect, useMemo} from "react";
import PostList from "@/components/music/PostList";
import {Button} from "@nextui-org/button";

export default function PostPage() {
    // 获取博客总数
    const {data: postTotal} = useGetPostCountQuery()
    console.log("postTotal:" + postTotal?.data)
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5
    const pageNumbers = {
        page: page - 1,
        size: rowsPerPage
    };
    const {data: posts, isLoading, isFetching, isError,refetch} = useGetBlogQuery(pageNumbers)
    const pages = useMemo(() => {
        return postTotal?.data ? Math.ceil(postTotal?.data / rowsPerPage) : 0;
    }, [posts?.data.length, rowsPerPage])

    // const dispatch = useAppDispatch()

    // if (posts !== undefined) {
    //     dispatch(setPosts(posts))
    // }

    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-4xl text-center justify-center">
                    {
                        posts?.data.map((post) => {
                            console.log(post)
                            return (
                                <PostList blog={post}/>
                            )
                        })
                    }
                </div>
                <div className="flex flex-row gap-5 justify-between">
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setPage((page) => (page > 1 ? page - 1 : page))}
                        // 清除缓存
                        onClick={()=>{refetch()}}
                    >
                        Previous
                    </Button>
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setPage((page) => (page < pages ? page + 1 : page))}
                        // 清除缓存
                        onClick={()=>{refetch()}}
                    >
                        Next
                    </Button>
                </div>
            </section>

        </>
    );
}
