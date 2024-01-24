"use client"
import ResearchCard from "./RNPbCard";
import { FetchResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import useScrollPosition from "@/app/hooks/useScrollPosition";
import useWindowDimension from "@/app/hooks/useWindowDimensions";
import { MdMenuBook } from "react-icons/md"; // this for the hover effect later 

type ResearchCardsPropType = {
    research : FetchResearchType[];
}
const ResearchCards = ({research}:ResearchCardsPropType)=> {
    const {isMobileScreen} = useWindowDimension()
    const {scrollPosition,contentRef} = useScrollPosition()

    const handleClick = (id:number)=> {
        console.log(id)
    }

    return (
        <div className="flex lg:items-center justify-start lg:justify-center w-full lg:w-[70%] lg:h-full">
            <div className="lg:h-full carousel items-center h-[70vh] w-full lg:w-full carousel-vertical lg:overflow-x-scroll lg:snap-x lg:flex-row carousel-center lg:rounded-box lg:gap-7"  >
                    <div ref={contentRef} className="lg:h-fit flex flex-col lg:flex-row gap-7" style={isMobileScreen?{}:{transitionProperty:"position",transitionTimingFunction:"var(--easing)",scrollBehavior:"smooth",transform:`translateX(${-scrollPosition*80}px)`}}> {/* This div is added for so that we can scroll with the added less value*/}
                        {research.map((research)=> (
                            <div key={`researchCard-${research.id}`} className="carousel-item scale-78 md:scale-105 h-[150%] ">
                                <MdMenuBook
                                    className="relative top-0 left-0 z-0"
                                    opacity={0}
                                />      
                                <ResearchCard
                                    research={research}
                                    handleCardClick={handleClick}
                                />
                            </div>
                        ))}
                        <div className="flex text-3xl lg:text-4xl lg:h-full bg-black p-3"> 
                            <h1 className="m-10 text-center">You've Reached The End Of The Research. Thank You For Your Visit</h1>
                        </div>
                    </div>
            </div>  
        </div>
    )
}

export default ResearchCards;