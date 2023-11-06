import {Link} from "@nextui-org/link";
import {Card, CardHeader, Image} from "@nextui-org/react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PostList = (props) => {
    return (
        <>
            <Card
                className="col-span-12 sm:col-span-4 h-[300px]"
            >
                <Link href="https://www.baidu.com">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">{props.title}</p>
                        <h4 className="text-white font-medium text-large">{props.summary}</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="/img/2.png"
                    />
                </Link>
            </Card>
        </>
    )
}