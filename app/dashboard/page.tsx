"use client"
import BlogList from '@/components/dashboard/BlogList'
import {useGetBlogQuery} from "@/app/api/postApi";

export default function DashboardPage() {

    return (
        <div>
            <BlogList />
        </div>
    );
}