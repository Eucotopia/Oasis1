import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export interface User {
    id: number | null
    username: string | null
    email: string | null
    token: string | null
}

export interface LoginRequest {
    email: string
    password: string
}
// 博客类型
export type Post = {
    id: number,
    title: string,
    content: string,
    isPublished:number
}


export interface ResultResponse<T> {
    code: string
    data: T
    message: string
}