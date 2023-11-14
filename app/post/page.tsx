"use client"
import {useGetBlogQuery, useGetPostCountQuery} from "@/app/api/postApi";
import {Pagination, Spinner} from "@nextui-org/react";
import React, {useMemo} from "react";
import PostList from "@/components/music/PostList";

export default function PostPage() {
    // 获取博客总数
    const {data: postTotal} = useGetPostCountQuery()
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5
    const pageNumbers = {
        page: page-1,
        size: rowsPerPage
    };
    console.log(pageNumbers)

    console.log(pageNumbers)

    const {data: posts, isLoading, isFetching, isError} = useGetBlogQuery(pageNumbers)

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
                            return (
                                <PostList blog={post}/>
                            )
                        })
                    }
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            </section>
        </>
    );
}
