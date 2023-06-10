'use client'

import { SimplePost } from "@/model/post";
import Image from "next/image";
import ActionBar from "./ActionBar";
import Avatar from "./Avatar";
import CommentForm from "./CommentForm";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostMordal from "./PostMordal";
import { setOriginalNode } from "typescript";

type Props = {
    post: SimplePost;
    priority?: boolean;
}

export default function PostListCard({ post, priority = false }: Props) {
    const { username, userImage, image, createdAt, likes, text } = post;
    const [openMordal, setOpenMordal] = useState(false);

    return (
        <article className="rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center p-2">
                <Avatar image={userImage} size="medium" hightlight />
                <span className="text-gray-900 font-bold ml-2">{username}</span>
            </div>
            <Image
                className="w-full object-cover aspect-square"
                src={image} alt={`photo by ${username}`} width={500} height={500} priority={priority}
                onClick={() => setOpenMordal(true)} />
            <ActionBar likes={likes} username={username} text={text} createdAt={createdAt} />
            <CommentForm />
            {
                openMordal && <ModalPortal>
                    <PostMordal onClose={() => setOpenMordal(false)}>
                        <p>포스트 상세 페이지</p>
                    </PostMordal>
                </ModalPortal>
            }
        </article>
    )
}