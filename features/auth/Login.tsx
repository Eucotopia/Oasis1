"use client"
import {LoginRequest} from "@/types";
import {useGetUserByIdQuery, useLoginMutation} from "@/app/api/authApi";
import {Input} from "@nextui-org/input";
import React, {ChangeEvent, useMemo, useState} from "react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import {useAppDispatch} from '@/app/hooks/hooks'
import {Button} from "@nextui-org/button";
import {setCredentials} from "@/features/auth/authSlice";

export const Login = () => {
    const dispatch = useAppDispatch()
    // 定义用户名和密码
    const [formState, setFormState] = useState<LoginRequest>({
        email: '',
        password: '',
    })
    const [login, {isLoading}] = useLoginMutation()

    const [isVisible, setIsVisible] = useState(false);
    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    // 校验用户名格式
    const isInvalid = useMemo(() => {
        if (formState.email === "") return false;
        return !validateEmail(formState.email);
    }, [formState.email]);

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setFormState((prev) => ({
        ...prev,
        [name]: value
    }))

    // 用户登陆
    const Login = async () => {
        try {
            const user = await login(formState).unwrap()
            dispatch(setCredentials(user))
        } catch (err) {
        }
    }
    return (
        <>
            <Input
                value={formState.email}
                onChange={handleChange}
                name="email"
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
                onClick={() => Login()}
                isLoading={isLoading}
            >Login</Button>
            <Button>获取单个用户</Button>
        </>
    );

}