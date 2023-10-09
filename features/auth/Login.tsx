"use client"
import {LoginRequest} from "@/types";
import {useLoginMutation} from "@/app/api/auth";
import {Input} from "@nextui-org/input";
import React, {ChangeEvent, useMemo, useState} from "react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import {Button} from "@nextui-org/button";

export const Login = () => {
    // const dispatch = useDispatch()
    const [formState, setFormState] = useState<LoginRequest>({
        username: '',
        password: '',
    })
    const [login, {isLoading}] = useLoginMutation()
    const [isVisible, setIsVisible] = useState(false);
    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const isInvalid = useMemo(() => {
        if (formState.username === "") return false;
        return !validateEmail(formState.username);
    }, [formState.username]);

    const handleChange = ({
                              target: {name, value},
                          }: ChangeEvent<HTMLInputElement>) =>
        setFormState((prev) => ({...prev, [name]: value}))

    return (
        <>
            <Input
                value={formState.username}
                onChange={handleChange}
                name="username"
                type="email"
                label="Email"
                variant="bordered"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage={isInvalid && "Please enter a valid email"}
                className="max-w-xs"
            />
            <Input
                label="Password"
                name={"password"}
                variant="bordered"
                placeholder="Enter your password"
                value={formState.password}
                onChange={handleChange}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
            />
            <Button
                onClick={async () => {
                    try {
                        const user = await login(formState).unwrap()
                        // dispatch(setCredentials(user))
                    } catch (err) {
                    }
                }}
                isLoading={isLoading}
            >
                Login
            </Button>
        </>
    );

}