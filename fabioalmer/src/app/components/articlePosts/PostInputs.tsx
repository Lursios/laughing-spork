import React,{useCallback, useState} from "react";
import {useDropzone} from "react-dropzone"
import { FaUpload } from "@react-icons/all-files/fa/FaUpload";
import { GroupBase } from "react-select"
import { Controller } from "react-hook-form";
import makeAnimated from "react-select/animated"
import ReactSelect from "react-select/creatable"
import PbButton from "../publication&research/PbButton";


type PostInputProps = {
    label:string,
    register :any
    
}


export const PostInputTest = (({label,register}:PostInputProps)=> {
    return (
        <div className="flex flex-col mr-[200px]">  
            <label className="font-bold text-black text-base">{label}</label>
            <input {...register(label.toLowerCase())} className={`border-solid border-2 w-[364px] h-7 mb-8 border-black bg-white`} placeholder={""}></input>
        </div>
    )
})

export default function PostInput({label}:PostInputProps) {
    return (
        <div className="flex flex-col mr-[200px]">  
            <label className="font-bold text-black text-base">{label}</label>
            <input className={`border-solid border-2 w-[364px] h-7 mb-8 border-black bg-white`} placeholder={""}></input>
        </div>
    )
}

export type PostInputImageProps = {
    register :any
}
export function PostInputImage({register}:PostInputImageProps) {
    const onDrop = useCallback((acceptedFiles:any) => {
        console.log(acceptedFiles)
      }, [])

      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className="flex flex-col mr-[200px]" {...getRootProps()}>  
            <label className="font-bold text-black text-base">Cover Image</label>
            <div className="flex flex-col w-[364px] items-center justify-center mb-6">

                <div className="flex flex-row w-full " {...getInputProps} >
                    <input className="text-transparent w-3/4 border-solid border-black border-2 bg-white" placeholder="Choose Files To Upload" disabled={true} {...register("image")}></input>
                    <button type="button" className="border-y-2 grow border-r-2 px-1 border-solid border-black bg-gray-300 text-extrabold " onClick={()=> console.log("clicked")}>Browse Files</button>
                </div>
                
                <div className="flex flex-col mt-2 p-5 w-full items-center justify-center border-dashed border-2 border-black bg-white text-gray-600">
                    <FaUpload
                    size = "1.5rem"
                    />
                    {   
                        isDragActive?
                        
                        <p>Drop Files here ...</p>:
                        <p>Drag n drop files here, or click browse files</p>
                    }
                </div>                
            </div>
        </div>
    )
}


type postInputTypeProps = {
    label:string,
    control:any,
    styleError : boolean
}

export function PostInputType({control,styleError,label}:postInputTypeProps) {
    const typeOptions:any= [

        {value:"research",label : "Research"},
        {value:"publication",label : "Publication"},
        {value:"experience",label : "Experience"}
    ];

    const animatedComponents = makeAnimated();

    return (
        <div className="flex flex-col w-[364px] mb-6">
            <label className="font-bold text-black text-base">Post Type</label>
            <Controller
            render={({field})=> {
                return (
                    <ReactSelect
                    {...field}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={typeOptions}
                    styles={{
                        control :(baseStyles,state) => ({
                            ...baseStyles,
                            backgroundColor : styleError? "#FCA5A5": "white",
                            borderColor: "black",
                            borderWidth: "2px",
                        })
                    }}
                    />
                    )
                }}
            control={control}
            name={label.toLowerCase()}
            />

        </div>
    )
}

type PostInputSummaryProps = {
    label : string,
    handleButtonOneClick :()=> void,
    handleButtonTwoClick : ()=> void,
    register : any
}

export function PostInputSummary({label,register,handleButtonOneClick,handleButtonTwoClick}:PostInputSummaryProps) {

    const [characterCount,setCharacterCount] = useState<string>("0");

    const onKeyDown = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const curentCharacter:string = event.target.value;
        console.log(curentCharacter);
        setCharacterCount(curentCharacter.length.toString())
    }
   
    return (

        <>
            <label className="m-1 p-0 label">
                <span className="label-text font-extrabold text-black">{label}</span>
                <span className="label-text-alt font-extrabold text-black ">{characterCount}/400</span>
            </label>
            <textarea onKeyUp={onKeyDown} className="mx-1 outline outline-black outline-1 focus:outline-2 h-32 focus:outline-emerald-500  bg-white" {...register(label.toLowerCase())}>tester</textarea>
            <div className="flex flex-row mx-1 "> 
                <div className="flex flex-row my-6 space-x-4 w-8/12">
                    <PbButton name="Save Data" type="submit" handleClick = {()=>console.log("clicked")}/>
                    <PbButton name="Generate Summary" type="button" handleClick = {handleButtonOneClick}/>
                </div>
                <div className="flex justify-end items-end my-6 grow">
                    <PbButton name="Cancel Creation" type="button" handleClick = {handleButtonTwoClick}/>
                </div>
                
            </div>
        </>

    )
}