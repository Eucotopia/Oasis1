import React from 'react'
import {BubbleMenu} from "@tiptap/react";

export default ({editor}) => {
    return (
        <>
         <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    strike
                </button>
            </BubbleMenu>
        </>

    )
}