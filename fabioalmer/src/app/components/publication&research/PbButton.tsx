
type PbButtonProp = {
    handleClick : ()=> void
}

export default function PbButton({handleClick}:PbButtonProp) {

    return (
        <button className="btn bg-yellow-300 " onClick={handleClick}>Back to Start</button>
    )
}