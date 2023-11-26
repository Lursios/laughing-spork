
type PbButtonProp = {
    handleClick : ()=> void,
    name: string,
    type : "button" | "submit" | "reset" | undefined
}

export default function PbButton({handleClick,name,type}:PbButtonProp) {

    return (
        <button type={type} className="flex h-fit w-fit py-0 px-4 rounded-full outline outline-3  bg-white font-extrabold outline-black text-l" onClick={handleClick}>{name}</button>
    )
}