import {useGetBlogByIdQuery} from "@/app/api/postApi";

export const PostDetail = ({id}: { id: number }) => {
    const {
        data: post,
        isFetching,
        isLoading
    } = useGetBlogByIdQuery(id, {
        // 每 3s 轮询，实现实时数据更新的效果
        pollingInterval: 3000,
        // 用于控制查询的自动触发行为
        refetchOnMountOrArgChange: true,
        skip: false,
    })
    if (isLoading) {
        return <div>Loading</div>
    }
    if (!post){
        return <div>Missing post!</div>
    }
    return (
        <div>
            {post.data.title}
        </div>
    )

}