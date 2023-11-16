"use server"
import axios from "axios"

// Communicating with google recatcpha from our server 
export default async function verifyCaptcha(token:string|null) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    const res = await axios.post(   
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    )
    console.log(res.data)

    if (res.data.success) {
        return "success"
    } else {
        return "fail"
    }
}