import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Fragment} from "react"
import './MenuBar.scss'
import MenuItem from './MenuItem'
import './MenuItem.scss'
import {Link} from "@nextui-org/link";

export default ({editor}) => {
    const items = [
        {
            icon: 'fa-solid fa-code',
            title: 'CodeBlock',
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive('codeBlock')
        },
        {
            type: 'divider',
        },
        {
            icon: 'fa-solid fa-subscript',
            title: 'superscript',
            action: () => editor.chain().focus().toggleSubscript().run(),
            isActive: () => editor.isActive('subscript')
        },
        {
            icon: 'fa-solid fa-superscript',
            title: 'superscript',
            action: () => editor.chain().focus().toggleSuperscript().run(),
            isActive: () => editor.isActive('superscript')
        },
        {
            type: 'divider',
        },
        {
            icon: 'fa-solid fa-align-left',
            title: 'align-left',
            action: () => editor.chain().focus().setTextAlign('left').run(),
            isActive: () => editor.isActive({textAlign: 'left'})
        },
        {
            icon: 'fa-solid fa-align-center',
            title: 'align-center',
            action: () => editor.chain().focus().setTextAlign('center').run(),
            isActive: () => editor.isActive({textAlign: 'center'})
        },
        {
            icon: 'fa-solid fa-align-right',
            title: 'align-right',
            action: () => editor.chain().focus().setTextAlign('right').run(),
            isActive: () => editor.isActive({textAlign: 'right'})
        },
        {
            type: 'divider',
        },
        {
            icon: 'fa-solid fa-bold',
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold'),
        },
        {
            icon: 'fa-solid fa-italic',
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic'),
        },
        {
            icon: 'fa-solid fa-strikethrough',
            title: 'Strike',
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive('strike'),
        },
        {
            type: 'divider',
        },
        {
            icon: 'fa-solid fa-paragraph',
            title: 'Paragraph',
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive('paragraph'),
        },
        {
            icon: 'fa-solid fa-list-ul',
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive('bulletList'),
        },
        {
            icon: 'fa-solid fa-list-ol',
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive('orderedList'),
        },
        {
            icon: 'fa-solid fa-list-check',
            title: 'Task List',
            action: () => editor.chain().focus().toggleTaskList().run(),
            isActive: () => editor.isActive('taskList'),
        },
        {
            type: 'divider',
        },
        {
            icon: 'fa-solid fa-quote-left',
            title: 'Blockquote',
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive('blockquote'),
        },
        {
            icon: 'fa-solid fa-ruler-horizontal',
            title: 'Horizontal Rule',
            action: () => editor.chain().focus().setHorizontalRule().run(),
        },
        {
            type: 'divider',
        },
        {
            icon: 'fa-solid fa-grip-lines',
            title: 'Hard Break',
            action: () => editor.chain().focus().setHardBreak().run(),
        },
        {
            icon: 'fa-solid fa-text-slash',
            title: 'Clear Format',
            action: () => editor.chain().focus().clearNodes().unsetAllMarks()
                .run(),
        },
        {
            type: 'divider',
        },
        {
            icon: 'fa-solid fa-rotate-left',
            title: 'Undo',
            action: () => editor.chain().focus().undo().run(),
        },
        {
            icon: 'fa-solid fa-rotate-right',
            title: 'Redo',
            action: () => editor.chain().focus().redo().run(),
        },
        {
            type: 'divider',
        }
    ]
    return (
        <div className="editor__header">
            {
                items.map((item, index) => (
                    <Fragment key={index}>
                        {item.type === 'divider' ? <div className="divider"/> : <MenuItem {...item} />}
                    </Fragment>
                ))
            }
            <Link
                color={"foreground"}
                title='backgroundColor'
                className={`menu-item ${editor.isActive('highlight', {color: editor.getAttributes('highlight').color}) ? 'is-active' : ''}`}
                onClick={() => {
                    const color = prompt('Please enter a background color:');
                    if (color) {
                        editor.chain().focus().toggleHighlight({color}).run();
                    }
                }}
            >
                <FontAwesomeIcon icon="fa-solid fa-palette"/>
            </Link>
            <Link
                color={"foreground"}
                title='textcolor'
                className={`menu-item ${editor.isActive('textStyle', {color: editor.getAttributes('textStyle').color}) ? 'is-active' : ''}`}
                onClick={() => {
                    const color = prompt('Please enter a text color:');
                    if (color) {
                        editor.chain().focus().setColor(color).run()
                    }
                }}
            >
                <FontAwesomeIcon icon="fa-solid fa-paintbrush"/>
            </Link>
            <Link
                color={"foreground"}
                title='image'
                className={`menu-item ${editor.isActive('image', {src: editor.getAttributes('image').src}) ? 'is-active' : ''}`}
                onClick={() => {
                    const url = window.prompt('URL')
                    if (url) {
                        editor.chain().focus().setImage({src: url}).run()
                    }
                }
                }
            >
                <FontAwesomeIcon icon="fa-solid fa-fill-drip"/>
            </Link>
            <Link
                title='youtube'
                className={`menu-item ${editor.isActive('youtube', {src: editor.getAttributes('youtube').src}) ? 'is-active' : ''}`}
                onClick={() => {
                    const url = prompt('Enter YouTube URL')
                    if (url) {
                        editor.commands.setYoutubeVideo({
                            src: url,
                            width: Math.max(320, parseInt("640", 10)) || 640,
                            height: Math.max(180, parseInt("480", 10)) || 480,
                        })
                    }
                }
                }
            >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
            </Link>

            <Link
                color={"foreground"}
                title='link'
                className={`menu-item ${editor.isActive('link', {href: editor.getAttributes('link').href}) ? 'is-active' : ''}`}
                onClick={() => {
                    const previousUrl = editor.getAttributes('link').href
                    if (previousUrl === undefined) {
                        const url = window.prompt('URL', previousUrl)
                        // cancelled
                        if (url === null) {
                            return
                        }
                        if (url === '') {
                            return
                        }
                        // update link
                        editor.chain().focus().extendMarkRange('link').setLink({href: url})
                            .run()
                    } else {
                        editor.chain().focus().extendMarkRange('link').unsetLink()
                            .run()
                    }
                }
                }
            >
                <FontAwesomeIcon icon="fa-solid fa-link"/>
            </Link>

        </div>
    )
}