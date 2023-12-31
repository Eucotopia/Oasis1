import {SVGProps} from "react";
import exp from "constants";

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
    username: string
    password: string
}

// 博客类型
export type Post = {
    id: number,
    title: string,
    content: string,
    summary: string,
    createTime: string,
    isTop: number,
    userId: number,
    likes: number,
    views: number,
    comments: number,
    cover: string
}
export type PostDTO = {
    title: string,
    content: string,
    summary: string,
    isTop: number,
    cover: string
}

export interface ResultResponse<T> {
    code: string
    data: T
    message: string
}
