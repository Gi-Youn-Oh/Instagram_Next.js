'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, HomeFillIcon, SearchIcon, SearchFillIcon, NewIcon, NewFillIcon } from "./ui/icons";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from 'next-auth/react'

const menu = [
    {
        href: '/', icon: <HomeIcon />, clickedIcon: <HomeFillIcon />
    }, {
        href: '/search', icon: <SearchIcon />, clickedIcon: <SearchFillIcon />
    }, {
        href: '/new', icon: <NewIcon />, clickedIcon: <NewFillIcon />
    }
]

export default function Navbar() {
    const pathName = usePathname();
    const { data: session } = useSession();

    return <div className="flex justify-between items-center px-6">
        <Link href="/">
            <h1 className="text-3xl font-bold">Instagram</h1>
        </Link>
        <nav>
            <ul className="flex gap-4 items-center p-4">
                {
                    menu.map(item => <li key={item.href}>
                        <Link href={item.href}>
                            {pathName === item.href ? item.clickedIcon : item.icon}
                        </Link>
                    </li>)
                }
                {session ? (<ColorButton text="Sign Out" onClick={() => signOut()} />) : (<ColorButton text="Sign In" onClick={() => signIn()} />)}
            </ul>
        </nav>
    </div>;
}