import { ResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import { titleStyle } from "@/app/fonts";

type ResearchCardProp = {
    research :ResearchType,
    handleCardClick : (id:string) => void
}

export default function ResearchCard({research, handleCardClick}:ResearchCardProp) {
    
    const cardStyle = {backgroundImage: `url(${research.image})`,backgroundSize: "cover", backgroundPosition: "center"}
    return (
        <article onClick={()=>handleCardClick(research.id)} key={research.id} 
        className={`flex flex-col flex-start flex-shrink-0 ml-10 my-4 rounded-[105px] ${"w-[345px] h-[460px]"} border-white border-solid border-0 py-7 px-6 `}
        style={research.image?{...cardStyle}:{backgroundColor:"red"}}>
            <h1 className=" text-black text-4xl font-extrabold mt-12">{".".repeat(Number(research.id))}</h1>
            <p className={`font-extrabold my-2 ${titleStyle(research.title)} text-[#3C3C3B]`}>{research.title}</p>
            <section className=" text-black text-sm font-bold">
                <p>Authors: {research.authors}</p>
                <p>Publisher: {research.publisher}</p>
                <p>Link: {research.link}</p> 
            </section>
        </article>
    )
    
}

export function ResearchCardPost({research, handleCardClick}:ResearchCardProp) {
    
    const cardStyle = {backgroundImage: `url(${research.image})`,backgroundSize: "cover", backgroundPosition: "center"}
    return (
        <article onClick={()=>handleCardClick(research.id)} key={research.id} 
        className={`flex flex-col flex-start flex-shrink-0 rounded-[105px] w-[430px] h-[590px] border-white border-solid border-0 py-7 px-6 `}
        style={{backgroundColor:"white"}}>
            <h1 className=" text-black text-5xl font-extrabold mt-14 mx-8">{"."}</h1>
            <p className={`font-extrabold text-4xl my-16 mx-8 ${titleStyle(research.title)} text-[#3C3C3B]`}>{research.title}</p>
            <section className="flex flex-col flex-grow text-black text-base font-bold mx-8">
                <p>Authors: {research.authors}</p>
                <p>Publisher: {research.publisher}</p>
                <p>Link:<a href={research.link}>{research.link}</a></p> 
            </section>
        </article>
    )
    
}