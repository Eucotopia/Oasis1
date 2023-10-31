import {PostDetail} from "@/features/post/PostDetail";
import {title} from "@/components/primitives";

export default function Page({params}: { params: { id: string } }) {
    return (
        <>
            <PostDetail id={Number(params.id)}/>
        </>
    )
}