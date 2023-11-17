"use client"
import { useEffect, useState } from "react"
import { fasterOne } from "../fonts"

export default function Footer() {
    return (
        <div className="bg-red-200 w-4/5 mx-auto mt-6 mb-16 ">
            <h1>Footer</h1>
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