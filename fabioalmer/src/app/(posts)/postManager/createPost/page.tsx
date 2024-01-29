"use client"

import TextEditor from "@/app/components/articlePosts/TextEditor";
import { useEffect, useRef, useState } from "react";
import { PostInputImage,PostInputSummary,PostInput,PostInputType } from "@/app/components/articlePosts/PostInputs";
import {useForm,Controller, FormProvider, set} from "react-hook-form";
import { custom, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResearchCardPost } from "@/app/components/publication&research/RNPbCard";
import PbButton from "@/app/components/publication&research/PbButton";
import handlePostSubmission from "@/app/(portfolio)/api/PostHandler";



const noHttpOrSlash = new RegExp("/^(?!.*https|\/).+$/") ; // this is the pattern matching so that it can't contain https or "/\" ( got it from chatGpt ) didn't work need to update

const postType = z.object({
  value:z.string(),
  label : z.string()
})

const postValidationSchema = z.object({
  title : z.string().min(0).max(450,{message:"The title is too long "}),
  authors : z.string().min(0,{message:"Can't be empty"}),
  link : z.string().min(0),
  publisher : z.string().min(0),
  image : z.string().min(0),
  summary : z.string().min(0).max(400,{message:"It's too long "}),
  content : z.string().min(0,{message: "can't be empty"}),
  postype : postType.array().min(1,{message:"Can't be empty"})
});

export type PostValidationSchema = z.infer<typeof postValidationSchema>

export default function CreatePost(){

    const [isHidden,setHidden] = useState<boolean>(true)
    const [isDark,setDark] = useState<boolean>(true)
  
    const methods = useForm<PostValidationSchema>({resolver:zodResolver(postValidationSchema),
      defaultValues:{
        title : "Here Lies The title",
        link : "www.porhub.com", // doi
        publisher : "OVO Sound",
        authors : "Lil Wayne, Drake, Kali Uchis",
        image : "https://res.cloudinary.com/dz1i63qzt/image/upload/v1701710133/IsoDefaultImage.png", //this the url to our save storage or something lah
        summary : "Click Generate Summary if you're lazy enough to do it",
        content : "Tell your story here :) ",
        postype:[{value:"publication",label:"Publication"},{value:"Research",label:"Research"}],

    }})

    const {handleSubmit,watch,setValue,reset,formState:{isSubmitSuccessful}} = methods
    const researchData = watch();

    const onSubmit = async (data:PostValidationSchema)=> {
      const result = await handlePostSubmission(data); //This is equivalent of sending a POST request to our api route
      
      console.log(result);
    }

    const confirmCardData = ()=> {
      setHidden(false);
    }

    const cancelCardData = ()=> {
      setHidden(true);
    }

    const onFileInput = (label:any,file:any)=> {
      setValue(label,file);
    }

    useEffect(()=> {

      if (isSubmitSuccessful){
        reset()
      }
      
    },[isSubmitSuccessful])
        
    return (
        <div className="bg-red-500 h-1/2 w-full overflow-y-scroll">
          <div className="flex flex-col ml-36 mt-10 mb-5 w-fit ">
            <h1 className="text-2xl text-extrabold text-white ">CREATE A NEW POST</h1>
            <p className="text-base text-bold text-yellow-500">Please Fill The Form as Needed</p>
          </div>
            <FormProvider {...methods}>
              <form className="flex flex-col ml-36 mr-40" onSubmit={handleSubmit(onSubmit)} >  

                  <div className="flex flex-row mb-20">
                    <div className="flex flex-col">
                        <PostInput  label="Title" register={methods.register} />
                        <PostInput  label="Authors" register={methods.register} />
                        <PostInput  label="Link" register={methods.register} />
                        <PostInput  label="Publisher" register={methods.register} />
                        <PostInputType styleError={false} label="Postype" control={methods.control}/>
                        <PostInputImage handleFileInput={onFileInput} register={methods.register}/>
                        <PbButton type="button" handleClick={confirmCardData} name="Confirm Data"/>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-4 h-fit ml-10">
                      <ResearchCardPost
                      handleCardClick={()=>setDark(!isDark)}
                      research={{...researchData,id:0}}
                      type = {isDark}
                      />
                    </div>     
                  </div>

                  <div hidden ={isHidden} className={isHidden?"":"flex flex-col "} >
                    
                    <TextEditor
                    name="content"
                    control={methods.control}
                    />
                    <PostInputSummary
                    control={methods.control}
                    label={"Summary"}
                    handleButtonOneClick= {()=> {console.log("generate summary")}}
                    handleButtonTwoClick = {cancelCardData}
                    />
                       
                  </div>

              </form>
            </FormProvider>
        </div>

      );
}



// const CreatePost = ()=> {
//   return (
//     <div>This is where we're going to create the post stuff</div>
//   )
// }

// export default CreatePost;