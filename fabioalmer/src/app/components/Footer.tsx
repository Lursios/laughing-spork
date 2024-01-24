"use client"
import { useEffect, useState } from "react"
import { fasterOne } from "../fonts"
import { usePathname } from "next/navigation"
import { FaArrowDownLong } from "react-icons/fa6";
import useWindowDimension from "../hooks/useWindowDimensions";

export default function Footer() {
    const location = usePathname()
    const {isMobileScreen} = useWindowDimension()

    return (
        <div className="w-auto m-20">
            {((location ==="/whoami"||location ==="/publication&research") && !isMobileScreen ) && 
            <div className="flex flex-col w-fit text-3xl font-extrabold font-montserrat gap-5 text-center items-center justify-center ">
                <h1>Scroll Down</h1>
                <FaArrowDownLong
                    size={"3.5rem"}
                    className="animate-bounce"
                />
            </div>
            }
        </div>
       
    )
}

export function PostFooter(){

    function handleClick(){
        //back to the top 
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }
    return (
        <div className="flex flex-row w-full items-center justify-center my-8">
            <button onClick={() => handleClick()} className={`btn bg-transparent text-lg text-black hover:text-white ${fasterOne.className}`}>Back to top</button>
        </div>
    )
}