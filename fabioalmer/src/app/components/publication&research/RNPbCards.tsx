"use client"

import { useEffect, useRef, useState } from "react"
import { ResearchType,getResearch,getPosts} from "@/app/(portfolio)/api/ResearchHandler"
import TextWithArrow from "./textWithArrow"
import Link from "next/link"
import PbButton from "./PbButton"
import { ModalCardPropType } from "./ModalCard"
import ResearchCard from "./RNPbCard"

type ResearchCardsProp = {
    handleOpenModal : (modalCard:ModalCardPropType)=> void
}


export default function ResearchCards({handleOpenModal}:ResearchCardsProp) {

    const [researches,setResearches] = useState<ResearchType[]>([])
    const [contentWidth,setContentWidth] = useState(0) // This is to get the value of the width of content which whatever we refered to using the contentRef
    const [scrollPosition,setScrollPosition] = useState(0) // This is so we know where the scroll position is and we can rerender accordingly
    const contentRef = useRef<HTMLDivElement>(null) // we need it to have that react capability but we don't need the component to re-render 

    const handleClick = ()=> {
        setScrollPosition(0);
    }

    const handleCardClick = (id:number) => { // This is will open
        // This code will use the already fetch once in the database part which was saved and reuse it her on the client
        researches.map((research)=> {
            if (research.id === id) {
                const modalCard :ModalCardPropType = {

                    researchPageRoute : research.link,
                    researchTitle : research.title,
                    researchSummary : research.summary,
                    researchImage: research.image,
                    researchId : id
                };

                handleOpenModal(modalCard)
            }
        })
        // handle to get the id of what is clicked
    } 

    useEffect(()=> {
        async function fetchResearch() {
            const data = await getPosts()
            setResearches(data);
    
            //this part is to set the content width since it need to get the ref only when all the research is rendered
            if (contentRef.current) {
                setContentWidth(contentRef.current.scrollWidth);
            }
        }
         // This is for fethcing the research part 
        fetchResearch();

        // This is for horizontal scrolling
        const handleScroll= (event:WheelEvent)=> { // this is the function to handle the scrolling

            const newScrollPosition = scrollPosition + event.deltaY; // the deltaY give the position of the screen +goes up -goes down
            const maxScrollPosition = Math.abs(contentWidth - (window.innerWidth)*0.8); // this calculates the maximum position by being able to scroll but only until the end of the content (that's why we substract so that we can go more than x px from the current screen)
            // console.log(`it's being tracked mp: ${maxScrollPosition} np:${newScrollPosition} sp: ${scrollPosition} cw :${contentWidth} edy: ${event.deltaY} wdw: ${window.innerWidth} `) for troubleshooting
            if ( newScrollPosition >= 0 && newScrollPosition <= maxScrollPosition) { // the bigger than 0 is so we can't scroll to the left more thatn the start
                setScrollPosition(newScrollPosition);
            }
        }

        document.addEventListener("wheel",handleScroll);

        return ()=> {
            document.removeEventListener("wheel",handleScroll); 
        }

    },[scrollPosition,contentWidth])

    return (
        <div ref={contentRef} className="flex flex-row flex-grow bg-red-700" style={{ transform: `translateX(${-scrollPosition}px)`}}>
            <section className="flex flex-col flex-shrink-0 w-2/5 px-16 pt-20"> {/* This is the section for the Discover Name  */}
                <h1 className="text-5xl font-extrabold text-white pb-10">Discover the Life and Work of Fabio Almer Agoes</h1>
                <Link href={"/contact"}>
                <TextWithArrow
                text="Collaborate on a research now !"
                />
                </Link>
                <TextWithArrow
                text="Lorem Ipsum working with me is ipsum "
                />
                <TextWithArrow
                text="Lorem Ipsum working with me is ipsum asdfasdfasdfsadfasd "
                />
                <TextWithArrow
                text="Lorem Ipsum working with me is ipsum asdfasdfasdfsadfasd Lorem Ipsum working with me is ipsum asdfasdfasdfsadfasd "
                />                                

            </section>

            <section className="flex flex-row bg-black pr-10"> {/* This is the section for the research card */}
                {researches.map((research:ResearchType)=> { 
                    return (
                        <ResearchCard
                        key={research.id}
                        handleCardClick={handleCardClick}
                        research={research}
                        />
                    )
                })}
            </section>  

            <section className="flex flex-col flex-shrink-0 w-2/5 px-16 pt-20 bg-white items-center"> {/* This is the section for the Thank you  */}
                <h1 className="text-5xl font-extrabold text-black pb-10">You've reached The End of My Research ! Thank you for Visiting</h1>
                <PbButton
                handleClick = {handleClick}
                name="Back to Home"
                type= "button"
                />
            </section>      
        </div>


        
    )
}