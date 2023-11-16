import { useRef} from "react"
import ReCAPTCHA from "react-google-recaptcha"
import verifyCaptcha from "@/app/(portfolio)/api/RecatpchaHandler"

type RecaptchaProp = {
    statusUpdate : (result?:string) => void,
    resetCaptcha : boolean
}


export default function Recaptcha({statusUpdate,resetCaptcha}:RecaptchaProp) {
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    async function getVerified(token:string|null) {
        const result = await verifyCaptcha(token)
        statusUpdate(result)
    }
    
    resetCaptcha && recaptchaRef.current?.reset()

    return (
        <ReCAPTCHA
        sitekey="6Lf8qfAoAAAAALYUfiFhc7HG381fRFQcwQ2xoMx-"
        ref={recaptchaRef}
        size="normal"
        theme="dark"
        onChange={getVerified}
        className="scale-[0.8]"
        />
    )
}