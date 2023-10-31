"use client"
import {useGetBlogQuery} from "@/app/api/postApi";
import {Spinner} from "@nextui-org/react";
import {Page} from '@/app/api/postApi'
import "@/components/tiptop/styles.scss"
import {lowlight} from "lowlight/lib/core";
import css from 'highlight.js/lib/languages/css'
import java from 'highlight.js/lib/languages/java'
import swift from 'highlight.js/lib/languages/swift'
import xml from 'highlight.js/lib/languages/xml'
import "@/components/tiptop/styles.scss"
import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

lowlight.registerLanguage('xml', xml)
lowlight.registerLanguage('java', java)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('swift', swift)
export default function PostPage() {
    const page: Page = {
        page: 0,
        size: 4
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
            <div className={isFetching ? 'posts--disabled' : ''}>
                {posts?.data.map((post) => (
                    post.title
                ))}
            </div>
            <NextLink
                color="foreground"
                href="/post/4"
            >
                跳转
            </NextLink>
        </>
    );
}
