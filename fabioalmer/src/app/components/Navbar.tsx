"use client"
import Link from "next/link";
import { fasterOne } from "../../utils/fonts";
import { MdContacts } from "react-icons/md";
import { GiGreenhouse,GiGreenPower } from "react-icons/gi";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { SiGreenhouse } from "react-icons/si";
import { usePathname,useRouter } from "next/navigation";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { BsSkipBackwardBtn } from "react-icons/bs";



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
    
    const router = useRouter();
    const handleGoback = ()=> {
        router.back()
    }

    return (
        <div className={`flex items-end text-sm lg:text-2xl  w-screen md:w-[680px] py-5 ${fasterOne.className}`}>
            <button onClick={handleGoback} className="hover:bg-white flex flex-row items-center justify-center gap-3 ">
                <BsSkipBackwardBtn size={logoSizeMobile}/>
                <p>Back To Previous Page</p>
            </button>
        </div>
    )
}


const PostNavbarLink = [
    {
        id:1,
        href:"/publication&research",
        label:"Back To HomePage"
    },
    {
        id:2,
        href:"/postManager/createPost",
        label:"Create A Post"
    },
    {
        id:3,
        href:"/postManager/updatePost",
        label:"Update A Post"
    },
    {
        id:4,
        href:"/postManager/readPosts",
        label:"Posts"
    },
    {
        id:5,
        href:"/postManager",
        label:"Login/Logout"
    },

]


export function PostManagerNavbar(){
    return (
        <div className="fixed top-0 w-screen p-5 bg-black text-white z-50">
            <div className={`flex flex-row items-center justify-center text-2xl gap-20 ${fasterOne.className}`}>
                {PostNavbarLink.map((link)=> (
                    <Link key={link.id} href={link.href} className="hover:outline p-2 rounded-xl"> {link.label} </Link>
                ))}
            </div>
        </div>
    )
}