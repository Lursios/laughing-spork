import FormInput from "@/app/components/contact/FormInput"
import SocialMediaComponent from "@/app/components/contact/SocialMediaContact"

export default function Contact() { 

    return (
        <div className="flex flex-col md:flex-row bg-black p-[5px] lg:w-full items-center outline-2 outline w-screen h-full outline-offset-[-5px] text-white outline-white " >

            <div className="flex flex-row items-center lg:flex-col gap-2 font-bold text-xl p-1 border-b-2 lg:w-1/5">
                <h1 className="border-solid border-white border-r-2 lg:border-r-0 lg:border-b-2 p-3 text-center lg:text-xl w-[50%] lg:w-full">Contact Me Here</h1>
                <SocialMediaComponent/>
            </div>

            <FormInput/>
        </div> 
    )
}