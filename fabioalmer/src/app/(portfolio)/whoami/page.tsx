import Image from "next/image"
import PosterFabio from "../../../../public/images/Poster-Fabio-Resized.png"
import { imageStyle } from "../../fonts"
import Experiences from "../../components/whoami/Experiences"

export default function Whoami() {

    const cvUrl= "https://drive.google.com/file/d/1OEImVg683PatNEaKov8BITC5omFhsd1S/view?usp=sharing"

    const workExperiences : string[] = [
        "IISMA Awardee 2022",
        "PT Nestle Indonesia",
        "Aliquam tincidunt mauris eu risus.",
        "Aliquam tincidunt mauris eu risus."] // edit this part to add the work experience
        
    const awardNAchievements : string[] = [
        "IISMA Awardee 2022",
        "IISMA Awardee 2022",
        "Aliquam tincidunt mauris eu risus.",
        "Aliquam tincidunt mauris eu risus."] // edit this part to add awards and achievements

    const educationExperiences : string[] = [
        "IISMA Awardee 2022",
        "IISMA Awardee 2022",
        "Aliquam tincidunt mauris eu risus.",
        "Aliquam tincidunt mauris eu risus."] // edit this part to add the work education Experience
    
    return (
        <div className= "flex w-4/5 mx-auto pl-14 pr-14 mt-6">

            <div className="w-1/2 flex justify-center items-center "> 

                <Image
                src={PosterFabio}
                alt="Photo of a weird main trying to get votes"
                className="border-solid border-black border-4 rounded-xl w-10/12 mb-16"
                />
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center ">
                <div className=" ml-24 text-center">
                    <Experiences
                    experienceName="Education Experiences"
                    experiences = {educationExperiences}
                    />
                    <Experiences
                    experienceName="Work Experiences"
                    experiences={workExperiences}
                    />
                    <Experiences
                    experienceName="Award & Achievements"
                    experiences={awardNAchievements}
                    />
                    <button className="btn btn-wide mt-8"><a target='_blank' rel='noopener noreferrer' href={cvUrl}>Download CV</a></button>
                </div>
            </div>
        </div>
    )
}