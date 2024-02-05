import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader"

export default function Loading() {
    return (
        <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
            <ClipLoader color="black" />
            <div className="flex flex-row items-center gap-3">
                <p>Loading</p>
                <PulseLoader size={5}/>
            </div>
        </div>
    )
}