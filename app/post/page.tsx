"use client"
import {useGetBlogQuery, useGetPostCountQuery} from "@/app/api/postApi";
import React, {useEffect, useMemo} from "react";
import PostList from "@/components/music/PostList";
import {Button} from "@nextui-org/button";
import BScroll from '@better-scroll/core'

export default function PostPage() {
    // 获取博客总数
    const {data: postTotal} = useGetPostCountQuery()
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5
    const pageNumbers = {
        page: page - 1,
        size: rowsPerPage
    };
    const {data: posts, isLoading, isFetching, isError, refetch} = useGetBlogQuery(pageNumbers, {
        // 每 3s 轮询，实现实时数据更新的效果
        pollingInterval: 3000,
        // 用于控制查询的自动触发行为
        refetchOnMountOrArgChange: true,
        skip: false,
    })
    const pages = useMemo(() => {
        return postTotal?.data ? Math.ceil(postTotal?.data / rowsPerPage) : 0;
    }, [posts?.data.length, rowsPerPage])
    useEffect(() => {
        new BScroll(".wapper");
    })
    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="flex-col wapper overflow-hidden h-20">
                    {/*<div className="border-1 h-10 w-10 border-amber-400 border-r-1.5">*/}
                    {/*</div>*/}
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </div>
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
                            onClick={() => {
                                refetch()
                            }}
                        >
                            Previous
                        </Button>
                        <Button
                            size="sm"
                            variant="flat"
                            color="secondary"
                            onPress={() => setPage((page) => (page < pages ? page + 1 : page))}
                            // 清除缓存
                            onClick={() => {
                                refetch()
                            }}
                        >
                            Next
                        </Button>
                    </div>
                </section>
                <div className="flex-col">
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </div>
        </>
    );
}
