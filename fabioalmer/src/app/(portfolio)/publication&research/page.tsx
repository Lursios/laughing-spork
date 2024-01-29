import { FetchResearchType, getPosts } from "../api/ResearchHandler";
import ResearchCards from "@/app/components/publication&research/ResearchCards";
import HeaderRNPB from "@/app/components/publication&research/HeaderRNPb";



export default async function PublicationResearch() {
    const data:FetchResearchType[] = await getPosts();
    console.log("this the type",typeof data, data)
    return (
        <div className={`flex flex-col sm:flex-row lg:flex-col items-center justify-center w-screen lg:w-full h-full p-[5px] text-white text-base md:text-5xl md:gap-7 lg:gap-1 font-extrabold`}>
            <HeaderRNPB/>
            <ResearchCards
                research={data}
            />
        </div>
        // <div className=" bg-red-300">
        //     <ResearchCards/>
        //     {/* <ModalCard
        //     /> */}
        // </div>
    )
}