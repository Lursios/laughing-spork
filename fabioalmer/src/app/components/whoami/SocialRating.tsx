"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Anto from "../../../../public/images/Reviewer/Ardiya.jpg"
import Vicky from "../../../../public/images/Reviewer/VickyAdrianPutranto.jpg"
import Fransiska from "../../../../public/images/Reviewer/Fransiska.png"
import Virsya from "../../../../public/images/Reviewer/VirsyaPramestiSalsabilla.jpg"
import Dimas from "../../../../public/images/Reviewer/DimasDewanto.jpg"

import Image from "next/image"
import { useRef,useState } from "react"
import useWindowDimension from "@/app/hooks/useWindowDimensions"

type AvatarCircleProps = {
    imgFile : string | StaticImport;
    alt : string;

}

export const reviewers = [
    {
        imgFile: Anto, alt:"Photo of Ardiyanto",
        name : "Ardiyanto", reviewerBackground : "Fabio High School Nemesis",
        review:"I Don't Like Fabio He Smells Like Shit 💩"
    },
    {
        imgFile: Vicky ,alt:"Photo Of Vicky",
        name: "Vicky Adrian Putranto", reviewerBackground : "Network Design Engineer At Huawei Indonesia",
        review: "I Have Worked With Fabio Before And I Think He's The Best Co-Worker Ever !!"
    },
    {
        imgFile: Fransiska ,alt:"Photo Of Fransiska",
        name: "Fransiska Situantika", reviewerBackground : "Fresh Graduate Of Institute Of Tehcnology Bandung",
        review: "I Have Never Worked With This Person In My Entire Life But I Would Love To If I Have The Opportunity "
    },
    {
        imgFile: Virsya ,alt:"Photo Of Virsya",
        name: "Virsya Pramesti Salsabilla", reviewerBackground : "Manufacturing Engineer At PT SGMW Motor Indonesia ",
        review: "I Think Fabio Is The Best Colleague I've Ever Work With, Any Company Is Lucky To Have Him ! "
    },
    {
        imgFile: Dimas ,alt:"Photo Of Dimas",
        name: "Dimas Yanuar Dewanto", reviewerBackground : "Asset Management Graduate Development Program at Petrosea",
        review: "I Think Fabio Is Very Analytical He Can Grasp Hard Concept And Turn It Into Something Understandable, We were Lucky To Recruit Him For Our Project."
    },
    {
        imgFile: Fransiska ,alt:"Photo Of Fransiska",
        name: "Fransiska Situantika", reviewerBackground : "Fresh Graduate Of Institute Of Tehcnology Bandung",
        review: "I Have Never Worked With This Person In My Entire Life But I Would Love To If I Have The Opportunity "
    },
    {
        imgFile: Fransiska ,alt:"Photo Of Fransiska",
        name: "Fransiska Situantika", reviewerBackground : "Fresh Graduate Of Institute Of Tehcnology Bandung",
        review: "I Have Never Worked With This Person In My Entire Life But I Would Love To If I Have The Opportunity "
    },
]

const AvatarCircle = ({imgFile,alt}:AvatarCircleProps)=> {
    return (
        <div className="avatar">
            <div className="relative w-16 rounded-full ring-offset-base-100 ring-offset-2">
                <Image
                    src={imgFile}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
        
    )
}


type SocialCircleProp = {
    reviewers : typeof reviewers
}

const SocialCircle= ({reviewers}:SocialCircleProp)=> {
    const {limitReviews} = useWindowDimension()
    const totalReviews = useRef(reviewers.length) 

    return (<>
            <div className="avatar-group m-[5px] rtl:space-x-reverse">  {/*This is the the social circles top group */}
                {reviewers.map((reviewer, index) => (
                    (index < limitReviews) && (
                        <AvatarCircle
                            key={index}
                            imgFile={reviewer.imgFile}
                            alt={reviewer.alt}
                        />
                    )
                ))}
                { (totalReviews.current > limitReviews) && (<div className="avatar placeholder">
                    <div className="w-16 rounded-full ring bg-white text-black outline-black">
                        <span>{`+${totalReviews.current-limitReviews}`}</span>
                    </div>
                </div>)}
            </div>
            <div className="flex flex-col gap-[5px] m-4">  {/*This is the Mother Container for the Carousel*/}
                <div className="carousel gap-3">  
                    {reviewers.map((reviewer,index)=> ( //This is the first row of the carousel
                        ((index+1)% 2 !== 0 ) &&
                        <div key={index+1} id={`item${index+1}`} className="carousel-item flex-col w-[calc(100%-24px)] h-fit rounded-xl p-3 bg-black text-white text-xs gap-2">
                            <div className="flex flex-row gap-3">
                                <div className="flex rounded-full overflow-hidden border-4 border-solid border-black border-opacity-85">
                                    <AvatarCircle
                                        imgFile={reviewer.imgFile}
                                        alt={reviewer.alt}
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <p className="font-motserrat font-extrabold text-sm">{reviewer.name}</p>
                                    <p className="font-thin">{reviewer.reviewerBackground}</p>
                                </div>
                            </div>
                            <p className="font-extrabold text-xs lg:text-base">{reviewer.review}</p>
                        </div>
                    ))}
                </div>
                <div className="carousel gap-3">
                    {reviewers.map((reviewer,index)=> ( // second row
                        ((index+1)% 2 === 0 ) &&
                        <div key={index+1} id={`item${index+1}`} className="carousel-item flex-col w-[calc(100%-24px)] h-fit bg-black p-3 rounded-xl text-white text-xs gap-2">
                            <div className="flex flex-row gap-3">
                                <div className="flex rounded-full overflow-hidden border-4 border-solid border-black border-opacity-85">
                                    <AvatarCircle
                                        imgFile={reviewer.imgFile}
                                        alt={reviewer.alt}
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <p className="font-motserrat font-extrabold text-sm">{reviewer.name}</p>
                                    <p className="font-light">{reviewer.reviewerBackground}</p>
                                </div>
                            </div>
                            <p className="font-extrabold text-xs lg:text-base">{reviewer.review}</p>
                        </div>
                    ))}
                </div>
                </div> 

                <div className="flex justify-center w-full py-2 gap-2">
                {reviewers.map((reviewer,index)=> (
                    <a key={`item-${index}`} href={`#item${index+1}`} className={`btn btn-xs bg-white outline-black border-2 text-black`}>{index+1} </a> 
                ))                    
                }
            </div>
            </>     
    )
}

export default SocialCircle;