
type PbButtonProp = {
    handleClick : ()=> void,
    name: string,
    type : "button" | "submit" | "reset" | undefined,
    className? : string
}

export default function PbButton({handleClick,name,type,className}:PbButtonProp) {

    return (
        <button type={type} className={`flex h-fit w-fit py-2 px-3 rounded-md outline outline-1 font-extrabold text-sm md:text-base lg:text-xl xl:text-2xl ${className}`} onClick={handleClick}>{name}</button>
    )
}