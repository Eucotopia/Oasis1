'use client';
import React, {useEffect} from "react";
import {CardBody, Image, Button, Card} from "@nextui-org/react";
import {HeartIcon} from "./HeartIcon";
import CategoryChip from "@/components/chip/CategoryChip";
import UserCard from "@/components/usercard/UserCard";
import NextLink from "next/link";
import {useIsLikedQuery, useLikeBlogQuery} from "@/app/api/postApi";

export default function PostList(props) {
    const [liked, setLiked] = React.useState(false);

    // const {data: res} = useIsLikedQuery(props.blog.id)

    // const [likeBlog] = useLikeBlogQuery()

    // useEffect(() => {
    //     console.log(res)
    //     if (res) {
    //         console.log(props.blog.id + ":" + res.data)
    //         setLiked(res.data)
    //     }
    // }, [liked, res])

    const likeButton = () => {
        // likeBlog(props.blog.id)
    }

    return (
        <>
            <Card
                isBlurred
                isHoverable
                className="border-none bg-background/60 dark:bg-default-100/50 w-[710px] mb-4"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-4  justify-center">
                        <div className="col-span-3 md:col-span-4">
                            <NextLink href={`/post/${props.blog.id}`}>
                                <Image
                                    isBlurred
                                    isZoomed
                                    alt="Post cover"
                                    className="object-cover"
                                    height="100%"
                                    shadow="md"
                                    src={props.blog.cover}
                                    width="100%"
                                />
                            </NextLink>

                        </div>
                        <div className="col-span-8 md:col-span-8 flex flex-col justify-between">
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col gap-0">
                                        <CategoryChip/>
                                    </div>
                                    <Button
                                        isIconOnly
                                        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                        radius="full"
                                        variant="light"
                                        onPress={likeButton}
                                    >
                                        <HeartIcon
                                            className={liked ? "[&>path]:stroke-transparent" : ""}
                                            fill={liked ? "currentColor" : "none"}
                                        />
                                    </Button>
                                </div>
                                <div className="flex flex-col mt-3 gap-1">
                                    <p className="text-blue-600 font-bold text-xl">{props.blog.title}</p>
                                    <p className="text-small text-foreground/80">{props.blog.summary}</p>
                                </div>
                            </div>

                            <div className="flex w-full flex-row">
                                <UserCard/>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>

    );
}
