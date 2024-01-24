"use client"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useEffect, useRef, useState} from "react"
import ReactSelect from "react-select"
import { emailHandler } from "../../(portfolio)/api/EmailHandler"
import Recaptcha from "./Recaptcha"


const emailSubjectSchema = z.object({
    value:z.string().min(1, {message: "Kindly Select a Subject"}),
    label:z.string().min(1,{message:"Just do it !"})
});

const validationSchema = z.object({
    firstName : z.string().min(1,{message: "First Name Is Required "}), // By setting the min to one it will set so we can't submit if the value is empty 
    lastName : z.string().min(1,{message:"Last Name Is Required "}),
    email: z.string().min(1,{message:"Email Is Required "}).email({
        message:"Please Enter a Valid Email Address"
    }),
    phoneNumber: z.string().min(1,{message:"Phone Number Is Required"}), // Key value pair which is [k:string] 
    purposeOfEmail:z.string().optional(),
    emailSubject: emailSubjectSchema,
    emailMessage : z.string().min(1, {message: "Kindly Explain More in Detail"}),
    sugar : z.string()
})

// // After you done just infer the validation scheme like this 
export type ValidationSchema = z.infer<typeof validationSchema>


export default function FormInput(){

    const [isVerified,setVerified] = useState(false)
    const [resetCaptcha,setResetCapthca] = useState(false)
    
    const handleVerified = (result:string|undefined) => {
        if (result === "success") {
            setVerified(true)   
        } else {
            setVerified(false)
        }
        
    }

    const subjectEmailOptions = [
        {value: "research collaboration", label:"Research Collaboration"},
        {value: "counseling", label: "Counseling"},
        {value: "infomercial interview", label: "Infomercial Interview"},
        {value: "others", label: "Others"}
    ]

    const { 
        register,
        handleSubmit,
        control,
        reset,
        formState:{errors,isValid,isDirty,isSubmitSuccessful} // is valid & dirty renders the button once it can be submitted , is submitsuccessfull return a boolean value if the submit is a success 
    } = useForm<ValidationSchema>({resolver:zodResolver(validationSchema)});

    const onSubmit = (data:ValidationSchema) => {
        // BotChecker 
        if(data.sugar.length != 0) {
            alert("Bot Detected ! Your Ip has been blocked and you can't use this form for one week thanks !")
        } else {
            // client info regarding result
            const newData = JSON.stringify(data)
            alert(newData)

            // server side for handling the user inputs which sends to the inputed email address and the owner
            // emailHandler(data) 
        }
    }
    useEffect(()=> {
        if (isSubmitSuccessful) {
            reset()
            setResetCapthca(true)
            setVerified(false)
        }
  
    },[isSubmitSuccessful])

    return (

        <form className="flex flex-col md:flex-row w-4/5 items-center h-fit mb-20 lg:mb-0 my-7 mx-7 gap-7" onSubmit={handleSubmit(onSubmit)}>
            {/* this part should be map instead */}
            <div className="flex flex-col w-full  gap-7"> 
                <div className="flex flex-col ">
                    <label className="font-bold">First Name</label>
                    <input className={`border-fill border-2 border-black ${errors.firstName?.message?"bg-red-300":"bg-white"}`} placeholder="" {...register("firstName")}></input>
                    <input type="hidden" {...register("sugar")}></input>  {/* This is the honey pot form for bot checker */}
                </div>
                <div className="flex flex-col ">  
                    <label className="font-bold">Last Name</label>
                    <input className={`border-fill border-2 border-black ${errors.lastName?.message?"bg-red-300":"bg-white"}`} placeholder="" {...register("lastName")}></input>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold">Email Address</label>
                    <input className={`border-fill border-2 border-black ${errors.email?.message?"bg-red-300":"bg-white"}`} placeholder="" {...register("email")}></input>
                </div>
                <div className="flex flex-col ">
                    <label className="font-bold">Phone Number</label>
                    <Controller
                        render={({field})=> (
                            <PhoneInput
                            placeholder = ""
                            numberInputProps={{style: {backgroundColor : errors.phoneNumber?.message? "#FCA5A5":"white", borderStyle:"solid", borderWidth:"2px", borderColor: "black" }}}
                            {...field}
                            />  
                        )}
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold">Purpose of Email</label>
                    <input className={`border-fill border-2 border-black ${errors.purposeOfEmail?.message?"bg-red-300":"bg-white"}`} placeholder="" {...register("purposeOfEmail")}></input>
                </div>
            </div>
            <div className="flex flex-col w-full  md:w-[100%] gap-7">
                <div className="flex flex-col">
                    <label className="font-bold">Subject Email</label> {/*This part we need to change into react select Remove Others and add a custom field type */}
                    <Controller
                        render={({field})=> (
                            <ReactSelect
                            {...field}
                            options={subjectEmailOptions}
                            isClearable
                            styles={{
                                control :(baseStyles,state) => ({
                                    ...baseStyles,
                                    backgroundColor : errors.emailSubject?.message? "#FCA5A5": "white",
                                    borderColor: "black",
                                    borderWidth: "2px",
                                    color:"red"
                                })
                            }}
                            />
                    )}
                    name="emailSubject"
                    control={control}
                    defaultValue={{value:"", label:""}}
                    />
                </div>
                <textarea className={`max-h-36 ${errors.emailMessage?.message?"bg-red-300":"bg-white"} text-black rounded-xl p-3`} placeholder="Write your message here" {...register("emailMessage")}></textarea>
                
                <div className="flex flex-col items-center gap-3 ">
                    <Recaptcha
                    statusUpdate= {handleVerified}
                    resetCaptcha = {resetCaptcha}
                    />
                    <button className={`btn btn-ghost text-white ${isValid? "bg-green-500":"bg-black"} mb-2`} disabled={(!isDirty || !isVerified)} >Send</button>
                </div>
            </div>
        </form>
    )
}