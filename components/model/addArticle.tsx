import React, {ChangeEvent, useState} from "react";
import Tiptop from '@/components/tiptop/Tiptop'
import {PlusIcon} from "../dashboard/PlusIcon";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input
} from "@nextui-org/react";
import {Blog, useAddBlogMutation} from "@/app/api/blogApi";

export default function AddArticle() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleChildContent = (html: string) => {
        setBlogState((pre) => ({
            ...pre,
            content: html
        }))
    }

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setBlogState((prev) => ({
        ...prev,
        [name]: value
    }))

    const [addBlog, isLoading] = useAddBlogMutation()

    const [blogState, setBlogState] = useState<Blog>({
            title: '',
            content: '',
            coverImage: "66666666",
            summary: ""
        }
    )

    const add = async () => {
        const blog = await addBlog(blogState).unwrap()
        console.log(blog)
    }


    return (
        <div className="flex flex-col gap-2">
            <Button color="primary" endContent={<PlusIcon/>} onPress={onOpen}>
                Add New
            </Button>
            <Modal
                size="5xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={"inside"}
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose: any) => (
                        <>
                            <ModalHeader className="flex flex-row gap-1">
                                <Input
                                    type="text"
                                    variant={"underlined"}
                                    placeholder="Enter Title"
                                    name="title"
                                    value={blogState.title}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="text"
                                    variant={"underlined"}
                                    placeholder="Enter summary"
                                    name="summary"
                                    value={blogState.summary}
                                    onChange={handleChange}
                                />
                            </ModalHeader>
                            <ModalBody>
                                <Tiptop onContentChange={handleChildContent}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={() => add()}>
                                    public
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
