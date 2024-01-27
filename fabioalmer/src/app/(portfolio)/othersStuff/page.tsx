"use client"
import { useEffect, useState } from "react";
import Modal from "react-modal";
import PbButton from "@/app/components/publication&research/PbButton";
import fabioPoster from "../../../../public/images/StopGlobalWarming.png"
import Image from "next/image";
import { MdMenuBook } from "react-icons/md"; // this for the hover effect later 



Modal.setAppElement('#main');

type ModalData =  {
    researchPage: string;
    researchTitle: string;
    researchSummary: string;
    researchImage: string;
    researchId: number;
}

type ModalCardProp = {
    modalOpen : ()=> ModalData;
}


const ModalCardPreview = ({modalOpen}:ModalCardProp)=> {

    const defaultModalData = {
        researchPage : "somewhere on our website",
        researchTitle : "Somewhere in Brooklyn Where I belong",
        researchSummary : "Let's make this even longer just in case you don't want to see more than you need we need to set it so that we add that type of functionality on it instead of showing everything you get it right ? this way so that it won't push it down the screen to much unless we want it to be this will make the user experience much more sleek since they won't need to read everything to exit the button and can read just enough summary to say , i think is enough information take me to the paper What if the text going to have more than enough you know it's going to push it so that it will go down what can we do in that case ? There's not much to say here except your welcome i really like the way that you articulate the words you're giving but even if i feel like i'm the only one in this world that really cares about the way that you move the rest of the world doesn't so why shoould nay body care right ?",
        researchImage : "This is the image that's going to be renderd",
        researchId: 0
    }

    const [isOpenModal,setIsOpenModal] = useState(false); 
    const [modalData,setModalData] = useState(defaultModalData) // modal data

    const openModal = ()=> {
        setIsOpenModal(true)
        setModalData(modalOpen)
    };

    
    const closeModal = ()=> {
        setIsOpenModal(false)
    }

    return (
        
        <>
            {/*Logo and the one needs to be clicked to render the component*/}
            <MdMenuBook 
                        size={"2.25rem"}
                        opacity={100}
                        className=" hover:text-black text-white"
                        onClick={openModal}
            />
            <Modal
                isOpen={isOpenModal}
                onRequestClose={closeModal}   
                contentLabel="Test Modal" 
                className="flex flex-col h-full items-center justify-center bg-transparent w-screen "// this is still the main style for the card like the mother div
            >
                {/* The modal card we want to render */}
                <ModalCard
                    onClose = {closeModal}
                    modalData = {modalData}
                />
            </Modal>
        </>
    )
}
export default ModalCardPreview;


type ModalCardProps = {
    onClose : ()=> void,
    modalData: ModalData
}

const ModalCard = ({onClose,modalData}:ModalCardProps)=> {
    const makeItShort = (text:string)=> {
        const wordLimit = 300;

        if (text.length >= wordLimit ) {
            const shorter = true
            return {
                text: text.slice(0,wordLimit),
                shorter
            }
        } else {
            const shorter = false
            return {text,shorter}
        }
    }

    const [summary,setSummary] = useState(makeItShort(modalData.researchSummary))

    const onFindOut = ()=> {
        console.log(`I'm going to go to this page ${modalData.researchPage}`)
    }

    const handleSeeMore = ()=> {
        setSummary({...summary,text:modalData.researchSummary,shorter:false})
    }

    return (
        <div className="flex flex-col flex-shrink items-center justify-center w-auto md:w-full h-screen mx-[10px]">
            
            <div className="bg-black flex flex-col items-center justify-center h-fit md:h-full w-full md:w-1/2 m-5 rounded-2xl overflow-y-scroll lg:overflow-hidden gap-7 mb-24">
                <div className="relative bg-black w-[90%] md:w-3/4 h-1/2 md:h-full mx-5 mt-5 lg:mt-10 aspect-square">
                    <Image 
                        alt={modalData.researchTitle}
                        src={modalData.researchImage}
                        fill
                        priority = {false}
                        sizes="(max-width: 768px) 30vw, (max-width : 1200px) 66vw"
                    />
                    {/* <h1>{modalData.researchImage}</h1> */}
                </div>
                <div className="flex h-1/2 lg:h-3/5 md:w-3/4 flex-col items-center mx-5 gap-7 lg:overflow-y-scroll custom-scrollbar px-1">
                    <div className="flex flex-shrink text-sm md:text-base lg:text-xl text-white md:w-full">
                        <h1>{summary.text} {summary.shorter && <span onClick={handleSeeMore} className="font-bold cursor-pointer"> ... See more</span>}</h1>
                    </div>
                    <div className="flex flex-row gap-12 pb-5">
                        <PbButton
                            handleClick={onClose}
                            type="submit"
                            name="Close Modal"
                            className="bg-transparent text-white"
                        />
                        <PbButton
                            name="Find Out More"
                            type="submit"
                            handleClick={onFindOut}  
                            className="bg-white outline-white text-black"
                        />
                    </div>
                </div>
            </div>
        </div>

        // <div className="flex flex-col items-center justify-center bg-red-300 mx-[5px]">
        //     <div className="flex flex-col flex-wrap items-center w-fit justify-center mx-10" >
        //         <h1 className="flex flex-shrink">This is the top part of the card when clicked sadfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</h1>
        //         <h1>This is what we need to do</h1>
        //     </div>
        //     <button onClick={onClose}>Close Modal</button>
        // </div>
        
    )
}