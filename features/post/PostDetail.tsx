import {useGetBlogByIdQuery} from "@/app/api/postApi";
import React from "react";
import {Editor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import {lowlight} from "lowlight/lib/core";
import Details from "@tiptap-pro/extension-details";
import DetailsSummary from "@tiptap-pro/extension-details-summary";
import DetailsContent from "@tiptap-pro/extension-details-content";
import Heading from "@tiptap/extension-heading";
import TaskItem from "@tiptap/extension-task-item";
import Emoji, {gitHubEmojis} from "@tiptap-pro/extension-emoji";
import suggestion from "@/components/tiptop/suggestion";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import Subscript from "@tiptap/extension-subscript";
import TextStyle from "@tiptap/extension-text-style";
import {Color} from "@tiptap/extension-color";
import Superscript from "@tiptap/extension-superscript";
import TaskList from "@tiptap/extension-task-list";
import FontFamily from "@tiptap/extension-font-family";
import ReactComponent from "@/components/tiptop/Extension";
import TextAlign from "@tiptap/extension-text-align";
import css from 'highlight.js/lib/languages/css'
import java from 'highlight.js/lib/languages/java'
import swift from 'highlight.js/lib/languages/swift'
import xml from 'highlight.js/lib/languages/xml'
lowlight.registerLanguage('xml', xml)
lowlight.registerLanguage('java', java)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('swift', swift)
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
    const editor = new Editor({
        content: post?.data.content,
        extensions: [
            // StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Details.configure({
                persist: true,
                HTMLAttributes: {
                    class: 'details',
                },
            }),
            DetailsSummary,
            DetailsContent,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            TaskItem.configure({
                nested: true,
            }),
            Emoji.configure({
                emojis: gitHubEmojis,
                enableEmoticons: true,
                suggestion,
            }),
            Link.configure({
                openOnClick: true,
            }),
            Highlight.configure({ multicolor: true }),
            Subscript,
            TextStyle,
            Color,
            Superscript,
            StarterKit,
            Highlight,
            TaskList,
            FontFamily,
            TaskItem,
            ReactComponent,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            })
        ],
        editable: false,
    })
    return (
        <div>
            <EditorContent editor={editor}/>
        </div>
    )

}