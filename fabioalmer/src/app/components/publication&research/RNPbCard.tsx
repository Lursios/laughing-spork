"use client"
import { ResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import { titleStyle } from "@/utils/fonts";
import { useState } from "react";
import ModalCardPreview from "./ModalCard";

type ResearchCardProp = {
    research :ResearchType,
}

export default function ResearchCard({research}:ResearchCardProp) {
    
    const [isHover,setIsHover] = useState(false);
    const [showPreviewIcon,setShowPreviewIcon] = useState(false);

    const cardStyle = {
        backgroundImage: `url(${research.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    const handlePreview = ()=> {

        const modalData = {
            researchPage: "some page",
            researchTitle: research.title,
            researchSummary: research.summary,
            researchImage: research.image,
            researchId: research.id
        }
        // handleCardClick(research.id)
        return modalData
    }

    const handleMouseEnter = ()=> {
        setIsHover(true)
        setShowPreviewIcon(true)
    }

    const handleMouseLeave = ()=> {
        setIsHover(false)
    }
    
    const handleAnimationEnd = ()=> {
        if (!isHover) {
            setShowPreviewIcon(false)
        }
    }

    return (
        <article key={`research-${research.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`shadow-card flex flex-col flex-start my-4 rounded-[105px] w-[345px] h-[460px] border-white border-solid border-0 py-7 px-10 hover:cursor-pointer`} style={research.image?{...cardStyle}:{backgroundColor:"red"}}>
            <p className={`font-extrabold mt-12 my-2 ${titleStyle(research.title)} text-[#3C3C3B]`}>{research.title}</p>
            <section className="flex flex-col break-all w-full h-auto text-black text-sm font-bold ">
                <p>Authors: {research.authors}</p>
                <p>Publisher: {research.publisher}</p>
                <p>Link: {research.link}</p>
            </section>
            {showPreviewIcon && <div onAnimationEnd={handleAnimationEnd} className={`${isHover?"animate-card-preview-in":"animate-card-preview-out"} flex flex-row items-end justify-end w-full `}>  {/* This will only show if the component is hovered*/}
                <div className="tooltip h-fit w-fit" data-tip={"Preview"}>
                    <ModalCardPreview
                        modalOpen={handlePreview}
                    />
                </div>
            </div>}
        </article>
    )
    
}

type ResearchCardPostProp = {
    research :ResearchType,
    handleCardClick : (id:number) => void
    type : boolean
}

export function ResearchCardPost({research, handleCardClick,type}:ResearchCardPostProp) {

    
    const cardStyle = {backgroundImage: `url(${research.image})`,backgroundColor:type?"black":"white",backgroundSize: "cover", backgroundPosition: "center"}

    return (
        <div className="flex flex-col">
            <article onClick={()=>handleCardClick(research.id)} key={research.id} 
            className={`flex flex-col bg-green-500flex-start flex-shrink-0 rounded-[105px] w-[430px] h-[590px] border-white border-solid border-0 py-7 px-6 `}
            style={cardStyle}>
                <p className={`font-extrabold text-4xl my-16 mx-8 ${titleStyle(research.title)} ${type?"text-[#3C3C3B]":"text-white"}`}>{research.title}</p>
                <section className={`flex flex-col grow-0 w-fit ${type?"text-black":"text-white"} text-base font-bold mx-8`}>
                    <p>Authors: {research.authors}</p>
                    <p>Publisher: {research.publisher}</p>
                    <p>Link: <a href={research.link}>{research.link}</a></p> 
                </section>
            </article>
        </div>
    )
    
}