import React, {useState} from "react";
import Tiptop from '@/components/tiptop/Tiptop'
import {PlusIcon} from "../dashboard/PlusIcon";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalProps,
    Button,
    useDisclosure,
    RadioGroup,
    Radio,
    Input
} from "@nextui-org/react";

export default function AddArticle() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [content, setContent] = useState('')

    const  handleChildContent = (html: string) => {
        setContent(html)
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
                                <Input type="email" variant={"underlined"} placeholder="Enter Title"/>
                                <Input type="email" variant={"underlined"} placeholder="Enter Title"/>
                            </ModalHeader>
                            <ModalBody>
                                <Tiptop onContentChange={handleChildContent}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={()=>{alert(content)}}>
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
