"use client"
import ResearchCard from "./RNPbCard";
import { FetchResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import useScrollPosition from "@/app/hooks/useScrollPosition";
import useWindowDimension from "@/app/hooks/useWindowDimensions";




type ResearchCardsPropType = {
    research : FetchResearchType[];
}
const ResearchCards = ({research}:ResearchCardsPropType)=> {
    const {isMobileScreen} = useWindowDimension();
    const {scrollPosition,contentRef} = useScrollPosition(); 

    const handleClick = (id:number)=> {
        console.log(id)
    }

    return (
        <div className="flex md:items-center items-start justify-start md:justify-center w-full md:h-full">
            <div className="lg:h-[65vh] carousel items-center h-[70vh] custom:h-[60vh] md:h-[80vh] w-full lg:w-full carousel-vertical lg:overflow-x-scroll lg:snap-x lg:flex-row carousel-center lg:rounded-box lg:gap-7"  >
                    {research.map((research)=> (
                        <div key={`researchCard-${research.id}`} className="carousel-item scale-[.8] justify-start items-center md:scale-90 lg:scale-[.9] md:h-[100%]">      
                            <ResearchCard
                                research={research}
                                handleCardClick={handleClick}
                            />
                        </div>
                    ))}
            </div>  
        </div>
    )
}

export default ResearchCards;

// {/* <div ref={contentRef} className="lg:h-fit flex flex-col lg:flex-row bg-red-500 gap-7 md:px-3 md:overflow-y-scroll md:snap-y xl:overflow-y-hidden " style={isMobileScreen?{}:{transitionProperty:"position",transitionTimingFunction:"var(--easing)",scrollBehavior:"smooth",transform:`translateX(${-scrollPosition*80}px)`}}> {/* This div is added for so that we can scroll with the added less value*/}
// {research.map((research)=> (
//     <div key={`researchCard-${research.id}`} className="carousel-item scale-[.8] justify-start items-center sm:scale-90 md:scale-100 md:h-[100%]">      
//         <ResearchCard
//             research={research}
//             handleCardClick={handleClick}
//         />
//     </div>
// ))}
// </div> */}