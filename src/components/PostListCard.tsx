'use client'

import { Comment, SimplePost } from "@/model/post";
import Image from "next/image";
import ActionBar from "./ActionBar";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostMordal from "./PostMordal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";
import usePosts from "@/hooks/posts";

type Props = {
    post: SimplePost;
    priority?: boolean;
}

export default function PostListCard({ post, priority = false }: Props) {
    const { username, userImage, image, comments, text } = post;
    const [openMordal, setOpenMordal] = useState(false);
    const { postComment } = usePosts();

    const handlePostComment = (comment: Comment) => {
        postComment(post, comment);
    }

    return (
        <article className="rounded-lg shadow-md border border-gray-200">
            <PostUserAvatar image={userImage} username={username} />
            <Image
                className="w-full object-cover aspect-square"
                src={image} alt={`photo by ${username}`} width={500} height={500} priority={priority}
                onClick={() => setOpenMordal(true)} />
            <ActionBar post={post} onComment={handlePostComment}>
                <p>
                    <span className='font-bold mr-1'>{username}</span>
                    {text}
                </p>
                {comments > 1 && <button
                    className="font-bold my-2 text-sky-500"
                    onClick={() => setOpenMordal(true)}>{`View all ${comments} comments`}</button>}
            </ActionBar>
            {
                openMordal && <ModalPortal>
                    <PostMordal onClose={() => setOpenMordal(false)}>
                        <PostDetail post={post} />
                    </PostMordal>
                </ModalPortal>
            }
        </article>
    )
}