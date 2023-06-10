import { SimplePost } from "@/model/post"
import Image from "next/image";
import { useState } from "react";
import PostDetail from "./PostDetail";
import PostMordal from "./PostMordal";
import ModalPortal from "./ui/ModalPortal";
import { signIn, useSession } from "next-auth/react";

type Props = {
    post: SimplePost;
    priority?: boolean;
}

export default function PostGridCard({ post, priority = false }: Props) {
    const { image, username } = post;
    const [openMordal, setOpenMordal] = useState(false);
    const { data: session } = useSession();
    const handleOpenPost = () => {
        if (!session?.user) {
            return signIn();
        }
        setOpenMordal(true);
    }

    return <div className="relative w-full aspect-square">
        <Image
            className="object-cover"
            onClick={handleOpenPost}
            src={image} alt={`photo by ${username}`} fill sizes='650px' priority={priority} />
        {openMordal &&
            <ModalPortal>
                <PostMordal onClose={() => setOpenMordal(false)}>
                    <PostDetail post={post} />
                </PostMordal>
            </ModalPortal>
        }
    </div>
}