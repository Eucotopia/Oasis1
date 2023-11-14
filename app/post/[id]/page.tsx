import {PostDetail} from "@/features/post/PostDetail";

export default function Page({params}: { params: { id: string } }) {
    return (
        <>
            <div className="max-w-[810px] mx-auto">
            <PostDetail id={Number(params.id)}/>
            </div>
        </>
    )
}