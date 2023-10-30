"use client"

import Link from "next/link"

export default function GetToKnowMe() {
    return (
        <div className="bg-blue-200 mt-10 rounded-xl p-2">
            <Link href={"/whoami"} className="font-bold text-2xl" ><h1>Do you want to know who i am ? </h1></Link>
        </div>
    )
} 