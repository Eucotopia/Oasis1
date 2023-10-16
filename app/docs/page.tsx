import { title } from "@/components/primitives";
import {useAppSelector} from "@/app/hooks/hooks";

export default function DocsPage() {
	const user = useAppSelector((state) => state.auth)
	return (
		<div>
			<h1 className={title()}>Docs</h1>
		</div>
	);
}
