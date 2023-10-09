import { title } from "@/components/primitives";
import {Login} from "@/features/auth/Login";
export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<Login/>
		</div>
	);
}
