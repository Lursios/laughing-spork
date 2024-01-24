import ModalCard from "@/app/components/publication&research/ModalCard";
import { getPosts } from "../api/ResearchHandler";
import ResearchCards from "@/app/components/publication&research/ResearchCards";
import HeaderRNPB from "@/app/components/publication&research/HeaderRNPb";


export default async function PublicationResearch() {
    const data = await getPosts()
    
    return (
        <div className={`flex flex-col md:flex-row items-center justify-center w-screen lg:w-full h-full p-[5px] text-white text-base md:text-5xl gap-7 font-extrabold`}>
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