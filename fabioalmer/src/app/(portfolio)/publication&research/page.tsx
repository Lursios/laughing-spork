import ModalCard from "@/app/components/publication&research/ModalCard";
import { getPosts } from "../api/ResearchHandler";


export default async function PublicationResearch() {
    // we need to get the list of required documents data for our card component
    return (

        <div className="w-4/5 mx-auto p-30 bg-red-300 overflow-y-hidden">
            <ModalCard
            />
        </div>

    )
}