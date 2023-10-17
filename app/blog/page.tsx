"use client"
import { Button } from '@nextui-org/button';
import AddArticle from '../../components/model/addArticle';
import {useGetBlogByIdQuery, useGetBlogQuery} from "@/app/api/blogApi";
export default function BlogPage() {
	return (
		<div>
			<AddArticle />
		</div>
	);
}
