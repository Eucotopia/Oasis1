"use client"
import BlogList from '@/components/dashboard/BlogList'
import {useGetUserByIdQuery} from "@/app/api/authApi";
export default function DashboardPage() {
    return (
        <div>
            <BlogList />
        </div>
    );
}