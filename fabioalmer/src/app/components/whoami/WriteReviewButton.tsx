"use client"

import { BsPencilSquare } from "react-icons/bs";

export default function WriteReviewButton () {

    function handleSubmit() {
        alert("Coming Soon")
    }

    return (
        <div className="flex flex-row items-end w-auto ml-16">
            <button type="submit" onClick={handleSubmit} className="btn flex-nowrap flex flex-row items-center justify-center w-fit h-fit rounded-xl bg-green-500 text-white gap-3">
                <BsPencilSquare size={"1.5rem"}/>
                <p className="text-xs">Write a Review</p>
            </button>            
        </div>

    )
}