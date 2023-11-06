"use client"
import {useGetBlogQuery} from "@/app/api/postApi";
import {Spinner} from "@nextui-org/react";
import {Page} from '@/app/api/postApi'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import NextLink from "next/link";
import {PostList} from "../../features/post/PostList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PostPage() {
    const page = {
        page: 0,
        size: 8
    }
    const {data: posts, isLoading, isFetching, isError} = useGetBlogQuery(page)

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
