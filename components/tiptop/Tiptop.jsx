import Details from '@tiptap-pro/extension-details'
import DetailsContent from '@tiptap-pro/extension-details-content'
import DetailsSummary from '@tiptap-pro/extension-details-summary'
import Emoji, { gitHubEmojis } from '@tiptap-pro/extension-emoji'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { Color } from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import css from 'highlight.js/lib/languages/css'
import java from 'highlight.js/lib/languages/java'
import swift from 'highlight.js/lib/languages/swift'
import xml from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight/lib/core'
import { useEffect, useState } from 'react'
import ReactComponent from './Extension'
import MenuBar from './MenuBar'
import suggestion from './suggestion'
lowlight.registerLanguage('xml', xml)
lowlight.registerLanguage('java', java)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('swift', swift)

import './styles.scss'
import { faL } from '@fortawesome/free-solid-svg-icons'
export default (props) => {
    const editor = useEditor({
        extensions: [
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
            }),
            Placeholder.configure({
                includeChildren: true,
                placeholder: ({ node }) => {
                    if (node.type.name === 'detailsSummary') {
                        return 'Summary'
                    }

                    return null
                },
            }),
        ],
        content:'',
    })
    useEffect(() => {
        if (!editor) {
            return undefined
        }
        // get the content after every change.
        editor.on('update', () => {
            props.onContentChange(editor.getHTML())
        })

    }, [editor])
    return (
        <>
            <div className="editor">
                {editor &&
                    <MenuBar editor={editor}
                    />}
                <EditorContent className="editor__content" editor={editor} />
            </div>

        </>
    )
}