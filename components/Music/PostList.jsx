import React from "react";
import {CardBody, Image, Button, Card, CardHeader, CardFooter} from "@nextui-org/react";
import {HeartIcon} from "./HeartIcon";
import NextLink from "next/link";

export default function PostList(props) {
    const [liked, setLiked] = React.useState(false);

    return (
        <NextLink href={`/post/${props.blog.id}`}>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 w-[710px] m-2"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src="https://nextui.org/images/album-cover.png"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">{props.blog.title}</h3>
                                    <h1 className="text-large font-medium mt-2">{props.blog.summary}</h1>
                                </div>
                                <Button
                                    isIconOnly
                                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                    radius="full"
                                    variant="light"
                                    onPress={() => setLiked((v) => !v)}
                                >
                                    <HeartIcon
                                        className={liked ? "[&>path]:stroke-transparent" : ""}
                                        fill={liked ? "currentColor" : "none"}
                                    />
                                </Button>
                            </div>

                            <div className="flex flex-col mt-3 gap-1">
                                <div className="flex justify-between">
                                    <p className="text-small text-foreground/80">不知道些什么</p>
                                    <p className="text-small text-foreground/80">{props.blog.createTime}</p>
                                </div>
                            </div>

                            <div className="flex w-full items-center justify-center">
                                <p>点赞</p>
                                <p>评论</p>
                                <p>浏览</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </NextLink>
    );
}
