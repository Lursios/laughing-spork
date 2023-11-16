import Link from "next/link"

export default function Navbar() {
    return (
        <div className="relative w-4/5 mx-auto pt-16 pb-10" >
            <div className="navbar flex items-center justify-between bg-neutral text-neutral-content text-center " >
                <Link className="hover:animate-bounce pl-20" href={"/"}> Home </Link>
                <Link className="hover:animate-bounce " href={"/contact"}> Contact Me </Link>
                <Link className="hover:animate-bounce " href={"/whoami"}> About Me </Link> 
                <Link className="hover:animate-bounce pr-20" href={"/publication&research"}> Publication & Research </Link>     
            </div>
        </div>
    )
}

export function PostNavbar(){
    return (
        <h1>back to homepage</h1>
    )
}