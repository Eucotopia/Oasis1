"use client"
import { HeartFilledIcon } from "@/components/icons";
import { Button, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, Tab, Tabs, useDisclosure } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { RootDispatch, RootState } from "../store";
import { login, register } from "./userSlice";
const Login = () => {
    const [token, setToken] = useState(false);
    console.log(token);
    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const dispatch: RootDispatch = useDispatch();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    interface UserModel {
        username: string,
        password: string,
    }
    const User: UserModel = {
        username: "",
        password: ""
    }
    const [selected, setSelected] = useState("login");
    const [user, setUser] = useState(User);

    const validationState = useMemo(() => {
        if (user.username === "") return undefined;
        return validateEmail(user.username) ? "valid" : "invalid";
    }, [user.username]);

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, username: e.target.value });
    }
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: e.target.value });
    }

    const onRegister = () => {
        dispatch(register(user));
        dispatch(login(user));
    }
    const onLogin = () => {
        dispatch(login(user));
        setToken(true);
    }
    return (
        <>
            {
                token ? 'token' : <Button
                    onPress={onOpen}
                    className="text-sm font-normal text-default-600 bg-default-100"
                    startContent={<HeartFilledIcon className="text-danger" />}
                    variant="flat"
                >
                    Login</Button>
            }

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose: any) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
                            <ModalBody>
                                <Tabs
                                    fullWidth
                                    size="md"
                                    aria-label="Tabs form"
                                    selectedKey={selected}
                                    onSelectionChange={setSelected}
                                >
                                    <Tab key="login" title="Login">
                                        <form className="flex flex-col gap-4">
                                            <Input isRequired label="Email" placeholder="Enter your email" type="email"
                                                value={user.username}
                                                onChange={onChangeUsername} />
                                            <Input
                                                isRequired
                                                label="Password"
                                                placeholder="Enter your password"
                                                type="password"
                                                value={user.password}
                                                onChange={onChangePassword}
                                            />
                                            <p className="text-center text-small">
                                                Need to create an account?{" "}
                                                <Link size="sm" onPress={() => setSelected("sign-up")}>
                                                    Sign up
                                                </Link>
                                            </p>
                                            <div className="flex gap-2 justify-end">
                                                <Button fullWidth color="primary" onClick={onLogin} onPress={onClose}>
                                                    Login
                                                </Button>
                                            </div>
                                        </form>
                                    </Tab>
                                    <Tab key="sign-up" title="Sign up">
                                        <form className="flex flex-col gap-4">
                                            <Input isRequired label="Email" placeholder="Enter your email" type="email"
                                                value={user.username}
                                                onChange={onChangeUsername} />
                                            <Input
                                                isRequired
                                                label="Password"
                                                placeholder="Enter your password"
                                                type="password"
                                                value={user.password}
                                                onChange={onChangePassword}
                                            />
                                            <p className="text-center text-small">
                                                Already have an account?{" "}
                                                <Link size="sm" onPress={() => setSelected("login")}>
                                                    Login
                                                </Link>
                                            </p>
                                            <div className="flex gap-2 justify-end">
                                                <Button fullWidth color="primary" onClick={onRegister} onPress={onClose}>
                                                    Sign up
                                                </Button>
                                            </div>
                                        </form>
                                    </Tab>
                                </Tabs>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default Login