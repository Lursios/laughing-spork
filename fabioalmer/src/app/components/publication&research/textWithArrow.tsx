import {FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight"

type TextWithArrowProp = {
    text : string
}

export default function TextWithArrow({text}:TextWithArrowProp) {
    return (
        <div className="flex flex-row text-l font-extrabold pt-1 text-black">
            <FaArrowRight
            className = "text-blue-500 flex-shrink-0"
            size = "1.5rem"
            />
            <p className="pl-2">{text}</p>
        </div>
    )
}