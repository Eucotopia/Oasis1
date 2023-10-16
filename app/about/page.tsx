import { title } from "@/components/primitives";
import {Login} from "@/features/auth/Login";
import {useAuth} from "@/app/hooks/useAuth";
import {User} from "@/types";
export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			{/*<h2>{user.user.token}</h2>*/}
			<Login/>
		</div>
	);
}
