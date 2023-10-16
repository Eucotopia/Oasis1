import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export interface User {
    id: number|null
    username: string|null
    email: string|null
    token: string|null
}

export interface LoginRequest {
    email: string
    password: string
}