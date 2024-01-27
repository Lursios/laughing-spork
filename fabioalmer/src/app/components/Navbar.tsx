"use client"
import Link from "next/link";
import { fasterOne } from "../fonts";
import { MdContacts } from "react-icons/md";
import { GiGreenhouse,GiGreenPower } from "react-icons/gi";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { SiGreenhouse } from "react-icons/si";
import { usePathname } from "next/navigation";
import useWindowDimensions from "../hooks/useWindowDimensions";


const logoSize = "2.5rem"
const logoSizeMobile = "1.75rem"

const links :any[]= [
    {id : 1, href: "/", label: "Home", iconDesktop:<GiGreenhouse size={logoSize}/>, iconMobile : <GiGreenhouse size={logoSizeMobile}/>},
    {id: 2, href: "/whoami", label:"About", iconDesktop:<SiGreenhouse size={logoSize}/>,iconMobile:<SiGreenhouse size={logoSizeMobile}/>},
    {id: 3, href: "/contact", label:"Contact", iconDesktop: <MdContacts size={logoSize}/>,iconMobile:<MdContacts size={logoSizeMobile}/>},
    {id: 4, href: "/publication&research", label:"Projects",iconDesktop: <GiGreenPower size={logoSize}/>,iconMobile:<GiGreenPower size={logoSizeMobile}/>},
    {id: 5,href: "/othersStuff", label: "Others", iconDesktop: <PiTreeEvergreenFill size={logoSize}/>,iconMobile:<PiTreeEvergreenFill size={logoSizeMobile}/>},
]

const DesktopNavbar = ()=> {
    
    const currentSite = usePathname()

    return (
        <div className={`flex flex-col w-fit ml-36 md:mr-16 xl:mr-48 text-2xl tracking-widest font-montserrat font-light gap-11`}>
            {links.map(link=> (
                <Link key= {link.id} className={`w-fit hover:font-extrabold ${currentSite === link.href?"font-extrabold transition ease-in-out duration-1000 border-[0.5px] border-black p-2 border-solid rounded-sm":""}`} href={link.href}>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}

const MobileNavbar = () => {
    
    return (
        <div className="fixed bottom-0 bg-white text-black font-bold w-full z-50" >
            <div className="navbar bg-transparent flex flex-row gap-3 items-center justify-between text-center border-t-2 border-solid border-black px-5 sm:px-10 md:px-20 lg:px-30" >
                {links.map((link)=> (
                    <Link key={link.id} className="flex flex-col gap-1" href={link.href}>
                        {link.iconMobile}
                        <p className="text-black text-xs">{link.label}</p>
                    </Link> 
                ))}
            </div>
        </div>
    )
}

export  {DesktopNavbar,MobileNavbar};

export default function Navbar() {
    const {isMobileScreen} = useWindowDimensions()
    return (
            isMobileScreen? MobileNavbar():DesktopNavbar() // since we set the width initially to 1024 it renders the 1024 first at the start which is going to be problem figure out how to fix this 
    )
}



// this is for the main article part of the section
export function PostNavbar(){
    return (
        <div className={` flex flex-row justify-between text-2xl mt-16 mb-11 ${fasterOne.className}`}>
            <Link href={"/publication&research"} className="hover:bg-white flex justify-center items-center pr-2 rounded-r-xl "> Back to Homepage </Link>
            <Link href={"/"} className="hover:bg-white p-2"> Heartbreak Annivesary</Link>
        </div>

    )
}
export function PostManagerNavbar(){
    return (
        <div className={` flex flex-row justify-between text-2xl mt-16 mb-11 ${fasterOne.className}`}>
            <Link href={"/publication&research"} className="hover:bg-white flex justify-center items-center pr-2 rounded-r-xl "> Back to Homepage </Link>
            <Link href={"/postManager/createPost"} className="hover:bg-white p-2 rounded-xl"> Create A Post </Link>
            <Link href={"/postManager/updatePost"} className="hover:bg-white p-2 rounded-xl"> Update a Post</Link>
            <Link href={"/postManager/readPosts"} className="hover:bg-white p-2 rounded-xl"> Posts </Link>
            <Link href={"/postManager"} className="hover:bg-white p-2 rounded-l-xl"> Heartbreak Annivesary</Link>
        </div>

    )
}