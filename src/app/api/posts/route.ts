import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getFollowingPostsOf } from "@/service/posts";
import { getUserByUsername } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) {
        return new Response('Authentication required', { status: 401 })
    }

    return getFollowingPostsOf(user.username).then((data) => NextResponse.json(data));
}