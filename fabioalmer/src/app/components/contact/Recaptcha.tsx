import { useEffect, useRef,useState} from "react"
import ReCAPTCHA from "react-google-recaptcha"
import verifyCaptcha from "@/app/(portfolio)/api/RecatpchaHandler"

type RecaptchaProp = {
    statusUpdate : (result?:string) => void,
    resetCaptcha : boolean
}


export default function Recaptcha({statusUpdate,resetCaptcha}:RecaptchaProp) {

    // const {isMobileScreen} = useWindowDimension();
    const [isMobileScreen,setIsMobileScreen] = useState(true);

    const recaptchaRef = useRef<ReCAPTCHA>(null)

    async function getVerified(token:string|null) {
        const result = await verifyCaptcha(token)
        statusUpdate(result)
    }

    useEffect((()=> {
        if (resetCaptcha) {
            recaptchaRef.current?.reset();
        }
    }),[resetCaptcha])

    useEffect((()=> {
        recaptchaRef.current?.reset(); 
    }),[resetCaptcha])

    return (
        <div className="flex flex-col overflow-x-hidden">
            <ReCAPTCHA
                sitekey="6Lf8qfAoAAAAALYUfiFhc7HG381fRFQcwQ2xoMx-"
                ref={recaptchaRef}
                size= {isMobileScreen?"compact":"normal"}
                onChange={getVerified}
                className="p-0 m-0 scale-[0.8]"
            />
        </div>

    )
}