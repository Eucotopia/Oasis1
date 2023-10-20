'use client'
import { useGetUsersQuery} from "@/app/api/authApi";

export default function AboutPage() {
    const {data} = useGetUsersQuery()
    console.log(data?.data[0])
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}
