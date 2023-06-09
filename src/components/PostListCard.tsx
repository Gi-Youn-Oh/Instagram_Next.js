import { SimplePost } from "@/model/post";
import { parseDate } from "@/util/date";
import Image from "next/image";
import Avatar from "./Avatar";
import { BookmarkIcon, HeartIcon, SmileIcon } from "./ui/icons";

export default function PostListCard({ post }: { post: SimplePost }) {
    const { username, userImage, image, createdAt, likes, text } = post;

    return (<>
        <div>
            <Avatar image={userImage} hightlight />
            <span>{username}</span>
        </div>
        <Image src={image} alt={`photo by ${username}`} width={500} height={500} />
        <div>
            <HeartIcon />
            <BookmarkIcon />
        </div>
        <div>
            <p>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : "like"}`}</p>
            <p>
                <span>
                    {username}
                </span>
                {text}
            </p>
            <p>{parseDate(createdAt)}</p>
            <form>
                <SmileIcon />
                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
            </form>
        </div>
    </>
    )
}