import FormInput from "@/app/components/contact/FormInput"

export default function Contact() { 
    return (
        <div className="flex w-2/3 h-[440px] mx-auto my-7 bg-black rounded-2xl" >

            <div className="flex flex-col w-1/4 border-solid border-2 border-black bg-black rounded-l-2xl">

                <div className="flex flex-col items-center justify-center h-1/3 bg-black rounded-tl-2xl">
                    <h1 className="font-bold text-lg text-white"> Contact Me Here</h1>
                </div>
                <div className="flex flex-col items-center justify-center flex-grow rounded-bl-2xl bg-[#E6C187]">
                    <p className="p-4 text-center  overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque 
                    diam volutpat commodo sed egestas. Pellentesque diam volutpat commodo sed egestassadfaa dsaf asdfsadf 
                    =enas. Eu volutpat odio </p>
                </div>
                
            </div>
            <FormInput/>
        </div> 
    )
}