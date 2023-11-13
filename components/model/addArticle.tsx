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
import {useAddBlogMutation} from "@/app/api/postApi";
import {Post, PostDTO, ResultResponse} from "@/types";
import {useDispatch} from "react-redux";


export default function AddArticle() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const dispatch = useDispatch()

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

    const [blogState, setBlogState] = useState<PostDTO>({
            title: "",
            content: "这是一个博客内容",
            summary: "",
            isTop: 1,
        }
    )

    const add = async () => {
        // let result  = await addBlog(blogState) as unknown as ResultResponse<string>;
        const blog = await addBlog(blogState).unwrap()
        if (blog.code === "200") {
        }

    }


    return (
        <>
            <div className="flex flex-col gap-2">
                <Button variant={"flat"} endContent={<PlusIcon/>} onPress={onOpen}>
                    Add New
                </Button>
                <Modal
                    size="5xl"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    scrollBehavior={"inside"}
                    backdrop="blur"
                    isDismissable={false}
                >
                    <ModalContent>
                        {(onClose: any) => (
                            <>
                                <ModalHeader className="flex flex-row gap-1">
                                    请肆意发挥你的灵感
                                    {/*<Input*/}
                                    {/*    type="text"*/}
                                    {/*    variant={"underlined"}*/}
                                    {/*    placeholder="Enter Title"*/}
                                    {/*    name="title"*/}
                                    {/*    value={blogState.title}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    type="text"*/}
                                    {/*    variant={"underlined"}*/}
                                    {/*    placeholder="Enter summary"*/}
                                    {/*    name="summary"*/}
                                    {/*    value={blogState.summary}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*/>*/}
                                </ModalHeader>
                                <ModalBody>
                                    <Tiptop onContentChange={handleChildContent} isEditable={true}
                                            content={blogState.content}/>
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
        </>
    );
}
