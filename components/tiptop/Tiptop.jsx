'use client'
import Emoji, {gitHubEmojis} from '@tiptap-pro/extension-emoji'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import {Color} from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import 'katex/dist/katex.min.css'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import Youtube from '@tiptap/extension-youtube'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import {EditorContent, useEditor} from '@tiptap/react'
import css from 'highlight.js/lib/languages/css'
import java from 'highlight.js/lib/languages/java'
import swift from 'highlight.js/lib/languages/swift'
import xml from 'highlight.js/lib/languages/xml'
import {lowlight} from 'lowlight/lib/core'
import React, {useEffect} from 'react'
import ReactComponent from './Extension'
import MenuBar from './MenuBar'
import {Mention} from "@tiptap/extension-mention";
import MentionSuggestion from "@/components/tiptop/MentionSuggestion";

lowlight.registerLanguage('xml', xml)
lowlight.registerLanguage('java', java)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('swift', swift)

import './styles.scss'
import EmojiSuggestion from "./EmojiSuggestion";
import {Dropcursor} from "@tiptap/extension-dropcursor";
import {FileHandler} from "@tiptap-pro/extension-file-handler";
import {Mathematics} from "@tiptap-pro/extension-mathematics";
import {Typography} from "@tiptap/extension-typography";
import {StarterKit} from "@tiptap/starter-kit";

export default (props) => {
    const editor = useEditor({
        extensions: [
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Heading.configure({
                levels: [1, 2, 3],
            }),
            TaskItem.configure({
                nested: true,
            }),
            Emoji.configure({
                emojis: gitHubEmojis,
                enableEmoticons: true,
                suggestion: EmojiSuggestion,
                forceFallbackImages: true,
            }),
            Link.configure({
                openOnClick: true,
            }),
            Highlight.configure({multicolor: true}),
            Subscript,
            TextStyle,
            Color,
            Superscript,
            StarterKit,
            Highlight,
            Text,
            Document,
            TaskList,
            FontFamily,
            Image,
            Dropcursor,
            //TODO 待完成
            Table.configure({
                resizable: true,
            }),
            Link.configure({
                openOnClick: false,
            }),
            TableRow,
            TableHeader,
            TableCell,
            Youtube.configure({
                controls: false,
            }),
            Mention.configure({
                HTMLAttributes: {
                    class: 'mention',
                },
                suggestion: MentionSuggestion,
            }),
            History,
            Paragraph,
            Mathematics,
            ReactComponent,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Typography,

            //TODO 文件的复制粘贴
            FileHandler.configure({
                allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
                onDrop: (currentEditor, files, pos) => {
                    files.forEach(file => {
                        const fileReader = new FileReader()

                        fileReader.readAsDataURL(file)
                        fileReader.onload = () => {
                            currentEditor.chain().insertContentAt(pos, {
                                type: 'image',
                                attrs: {
                                    src: fileReader.result,
                                },
                            }).focus().run()
                        }
                    })
                },
                onPaste: (currentEditor, files, htmlContent) => {
                    files.forEach(file => {
                        if (htmlContent) {
                            // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
                            // you could extract the pasted file from this url string and upload it to a server for example
                            console.log(htmlContent) // eslint-disable-line no-console
                            return false
                        }
                        const fileReader = new FileReader()

                        fileReader.readAsDataURL(file)
                        fileReader.onload = () => {
                            currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
                                type: 'image',
                                attrs: {
                                    src: fileReader.result,
                                },
                            }).focus().run()
                        }
                    })
                },
            }),
        ],
        editable: props.isEditable,
        content: props.content,
        editorProps: {
            attributes: {
                spellcheck: 'false',
            },
        },
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

    if (props.isEditable === false) {
        return (
            <>
                <div>
                    <EditorContent className="editor__content" editor={editor}/>
                </div>

            </>
        )
    }
    return (
        <>
            <div className="editor">
                {/*{editor && <Bubble editor={editor}/>}*/}
                {editor && <MenuBar editor={editor}/>}
                <EditorContent className="editor__content" editor={editor}/>
            </div>
        </>
    )
}