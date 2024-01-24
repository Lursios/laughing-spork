import Image from "next/image"
import SocialRating, { reviewers } from "@/app/components/whoami/SocialRating";
import { FaQuoteLeft } from "react-icons/fa";
import Visionary from "../../../../public/images/Visionary.jpg"
import AkwardPic from "../../../../public/images/akward-pic.jpg"
import UniLife from "../../../../public/images/uni-life.jpg"
import Colleagues from "../../../../public/images/Colleagues.jpg"
import Friendship from "../../../../public/images/Friendship.jpg"
import WorklifeBalance from "../../../../public/images/Worklifebalance.jpg"
import WorldEnds from "../../../../public/images/WorldEnds.png"
import StopGlobalWarming from "../../../../public/images/StopGlobalWarming.png"
import Chainz from "../../../../public/images/2ChainzPointingUp.png"
import Fabs from "../../../../public/images/AbandFab.jpg"
import Ml from "../../../../public/images/ML_Fabio.jpg"
import { SiGoogledrive } from "react-icons/si";
import BottomImage from "@/app/components/whoami/BottomImage";
import SideImage from "@/app/components/whoami/SideImage";
import Spotify from "@/app/components/whoami/Spotify";
import WriteReviewButton from "@/app/components/whoami/WriteReviewButton";

const Whoami = ()=> {

    const cvUrl= "https://drive.google.com/file/d/1OEImVg683PatNEaKov8BITC5omFhsd1S/view?usp=sharing"
    
    return (
        // don't know why but we can't really edit the margin and the padding of the div so let's just set it as the main container
        <div className= "flex flex-col bg-white font-inter text-white w-full ">  
            <div className="grid grid-cols-1 gap-[5px] m-[5px] lg:m-0 mb-20"> {/*This is the mother grid*/}
                <div className="flex flex-col font-bold lg:text-2xl ">  {/*What's Up Section*/}
                    <div className=" bg-black p-3">What's Up?</div>
                    <div className="flex flex-row w-full items-center">
                        <div className="relative z-0 w-full h-auto aspect-square ">
                            <Image
                                src={AkwardPic}
                                alt="A photo of a presidential candidate"
                                fill
                                sizes="(max-width: 768px) 100vw"
                            />
                        </div>
   
                        <div className="bg-black">
                            <h1 className="relative z-10 right-7 text-xs lg:text-lg  bg-black py-3 px-3"> Why did the apple break up with the orange? Because it couldn't find the core of the relationship! Remember, 
                                a well-given apple a day keeps the bad jokes away!</h1>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-[5px] "> {/*Make A Living Section*/}
                    <div className="flex flex-row bg-black w-full h-fit p-3 items-center leading-normal ">
                        <div className="flex flex-col w-2/3">
                            <p className="text-2xl lg:text-3xl font-thin tracking-widest lg:tracking-normal">What</p>
                            <h1 className="text-xl  lg:text-2xl font-extrabold">I DO TO MAKE A LIVING</h1>
                        </div>
                        <div className="flex text-white text-xs font-light justify-end items-center text-center w-1/4 h-fit ml-8 lg:ml-14">
                            <a href={cvUrl} rel="noopener noreferrer" target="_blank" className="cv flex flex-col gap-1 items-center justify-center border-4 border-white border-solid rounded-full p-3">
                                <SiGoogledrive size={"1.75rem"}/>
                                <p>CV.pdf</p>
                            </a>   
                        </div>
                    </div>
                    <SideImage
                        imageFile={UniLife}
                        alt="Enjoying a cup of coffee"
                        textContent="Dedicated Grad Student Majoring In Climate Stuff and Busy Doing Climate Stuff"
                        imagePostion="left"
                    />
                    
                    <SideImage
                        imageFile={Colleagues}
                        alt="Fabio and Colleagues"
                        textContent="Love My Homies and Shouout to them for not seeing age a s a barrier to interact with each other"
                        imagePostion="right"
                    />
                    <SideImage
                        imageFile={Friendship}
                        alt="Fabio and Unknown Professor"
                        textContent="Many Thanks to My professor for showing me what a blessing it is to have the opportunity to become someone who can make a difference"
                        imagePostion="left"
                    />
                    <BottomImage
                        imageFile={WorklifeBalance}
                        alt="Enjoying Sunset At Work"
                        textContent="I Really Love My Job I Reccomend It For Everyone !"
                        coverPosition="center"
                        />
                </div>

                <div className="flex flex-col font-bold gap-[5px]">  {/*What I Believe Section*/}
                    <div className="bg-black p-3">
                        <h1 className="font-extralight text-3xl lg:text-4xl">WHAT</h1>
                        <h1 className="font-extrabold text-xl lg:text-2xl">I BELIEVE 🙏🏻</h1>
                    </div>
                    <SideImage
                        imageFile={Visionary}
                        imagePostion="right"
                        alt="Fabio With Glasses"
                        textContent="I'm proud to say that i join the movement and fully support #BLM And The Fight to make a the World Greener #saveClimate"
                    />
                    <div className="flex flex-row text-xs lg:text-xl font-extrabold w-full p-3 gap-2 justify-center bg-black">
                        <FaQuoteLeft size="1rem"/>
                        <p>Do What You Think Is Necessary For What you Believe And Take Action</p>
                    </div>
                    <BottomImage
                        imageFile={StopGlobalWarming}
                        alt="Protesting for a better future"
                        textContent="OUR FUTURE UNLESS WE DO SOMETHING ABOUT IT UNTIL ...." 
                        coverPosition="center"
                    />
                    <BottomImage
                        imageFile={WorldEnds}
                        alt="The Earth Exploding"
                        textContent="THERE'S NO FUTURE TO WORRY ABOUT. #SaveEarth" 
                        coverPosition="center"
                    />
                </div>

                <div className="flex flex-col font-inter gap-[5px] ">  {/*What I Love To Do*/}
                    <div className="flex flex-col bg-black p-3">
                        <p className="text-2xl lg:text-4xl font-extralight tracking-wide ">What</p>
                        <p className="text-xl lg:text-3xl font-extrabold">I LOVE TO DO</p>
                    </div>
                    
                    <SideImage
                        imageFile={Fabs}
                        imagePostion="left"
                        alt="Fabio Vacation Mode"
                        textContent="When I'm not busy making dough and saving the earth I Love Listening To Music, Visiting Historical Places, Playing Mobile Legends, and Making Love "
                    />
                    <BottomImage
                        imageFile={Ml}
                        alt="Fabio Mobile Legend Char"
                        textContent="Flexing My Mobile Legends Account 😎"
                        coverPosition="center"
                    />     
                    <Spotify
                        hiddenStatus={false}
                    />               
                    <BottomImage
                        imageFile={Chainz}
                        alt="Tester"
                        textContent="Check Out My Spotify Playlist!"
                        coverPosition = "top"                    
                    />
                </div>

                <div className="flex flex-col font-bold">  {/*What Other Thinks About Me*/}
                    <div className="flex flex-row bg-black w-full p-3 font-bold items-center">
                        <div className="flex flex-col w-2/3">
                            <p className="text-2xl lg:text-4xl tracking-wide">What</p>
                            <p className="text-2xl lg:text-4xl font-extrabold">Other</p>
                            <p className="text-lg lg:text-2xl">Thinks<span className="font-extralight"> About Me</span> </p>
                        </div>
                        <WriteReviewButton/>
                    </div>
                    <SocialRating
                        reviewers={reviewers}
                    />
                </div>
            </div>
        </div>
    )
}

export default Whoami;