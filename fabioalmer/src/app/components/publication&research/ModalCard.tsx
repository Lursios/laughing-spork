"use client"
import Link from "next/link"
import { useState } from "react"
import Modal from "react-modal"
import {FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight"
import {FaArrowLeft} from "@react-icons/all-files/fa/FaArrowLeft"
import { IoCloseCircleSharp } from "@react-icons/all-files/io5/IoCloseCircleSharp"
import ResearchCards from "./RNPbCards"

Modal.setAppElement("body");

export type ModalCardPropType = {
    researchPageRoute : string,
    researchTitle : string,
    researchSummary : string,
    researchImage : string,
    researchId : number
}


export default function ModalCard() {

    const [isOpenModal,setOpenModal] = useState(false)
    const [modalResearch,setModalResearch] = useState<ModalCardPropType>(
    {
        researchPageRoute : "",
        researchTitle : "",
        researchSummary : "",
        researchImage : "",
        researchId: 0 

    })

    const customStyles = {
        content : {
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            height : "100vh",
            backgroundColor : "transparent"
        }
    }
    
    const openModal = (modalResearchData:ModalCardPropType) =>{
        setModalResearch(modalResearchData)
        setOpenModal(true)
    }

    function closeModal(){
        setOpenModal(false)
    }
    

    return (
        <div>
        <ResearchCards
        handleOpenModal={openModal}
        />
        <Modal
            isOpen = {isOpenModal}    
            contentLabel="Tester"
            style={customStyles}
        >

        <div className="flex flex-col items-center justify-center flex-shrink-0 w-[599px] h-[566px] rounded-xl bg-black">
            
            <div className="flex flex-col h-3/5 w-full rounded-t-xl"
            style={{backgroundImage: `url(${modalResearch.researchImage})`, backgroundSize:"cover", backgroundPosition:"top"}}>

                <div className="flex flex-row justify-end bg-blue-500 w-full h-1/2 rounded-t-xl bg-transparent ">
                    <div className="flex flex-row bg-white w-fit h-fit mx-7 mt-9 rounded-xl border-2 border-fill border-black px-2 justify-center items-center">
                        <p className="px-1">{modalResearch.researchTitle}</p>
                        <button onClick={closeModal}>
                            <IoCloseCircleSharp
                            size="1.5rem"
                            />
                        </button>
               
                    </div>
                </div>
                {/* <div className="flex flex-row justify-between items-center px-10 bg-transparent w-full h-1/2 ">
                    <button className= "w-fit h-fit" onClick={closeModal}>
                        <FaArrowLeft
                        size="1.5rem"
                        /> 
                    </button>

                    <button className="w-fit h-fit"  onClick={closeModal}>
                        <FaArrowRight
                            size="1.5rem"
                        />
                    </button>

                </div> */}
            </div>

            <div className="flex flex-row h-2/5 w-full rounded-b-xl">
                <div className="flex w-1/3 py-7 px-5 bg-white text-4xl text-extrabold rounded-bl-xl border-2 border-fill border-black">
                    <Link className="flex flex-col justify-center items-center text-center" href={`/articlePosts/${modalResearch.researchPageRoute}?id=${modalResearch.researchId}`}>
                        <p>Find Out More</p>
                        <FaArrowRight size= "1.5rem"/>
                    </Link>
                </div>
                <div className="flex w-2/3 rounded-br-xl bg-black ">
                    <p className="flex flex-grow-0  text-white text-ellipsis overflow-hidden ... m-4">{modalResearch.researchSummary} </p>
                </div>
                
            </div>

        </div>

        </Modal>

        </div>


    )
}