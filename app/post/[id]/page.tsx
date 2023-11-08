import {PostDetail} from "@/features/post/PostDetail";

export default function Page({params}: { params: { id: string } }) {
    return (
        <>
            <PostDetail id={Number(params.id)}/>
        </>
    )
}