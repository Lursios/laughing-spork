"use client"
import { ResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import TextEditor from "@/app/components/articlePosts/TextEditor";
import {Editor} from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import PostInput, { PostInputImage,PostInputSummary,PostInputTest,PostInputType } from "@/app/components/articlePosts/PostInputs";
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

export default function UpdatePost(){

    const [typeAction,setTypeAction] = useState<string>("create");
    const [isHidden,setHidden] = useState<boolean>(true)
    const [isDark,setDark] = useState<boolean>(true)
  
    const methods = useForm<PostValidationSchema>({resolver:zodResolver(postValidationSchema),
      defaultValues:{
        title : "Just to test on the functionality making sure",
        link : "test", // doi
        publisher : "test",
        authors : "test",
        image : "https://res.cloudinary.com/dz1i63qzt/image/upload/v1701710133/IsoDefaultImage.png", //this the url to our save storage or something lah
        summary : "test",
        content : "This is the content fetch data",
        postype:[{value:"publication",label:"publication"},{value:"publication",label:"publication"}],

    }})

    const {handleSubmit,watch,setValue} = methods
    const researchData = watch();

    const onSubmit = async (data:PostValidationSchema)=> {
      const result = await handlePostSubmission(data); //This is equivalent of sending a POST request to our api route
      console.log(result)
    }

    const confirmCardData = ()=> {
      setHidden(false);
    }

    const cancelCardData = ()=> {
      setHidden(true);
    }

    const onFileInput = (label:any,file:any)=> {
      setValue(label,file);
      console.log("value has been set")
    }
        
    return (
        <>
          <div className="flex flex-col ml-36 mt-10 mb-5 w-fit ">
            <h1 className="text-2xl text-extrabold text-white ">{typeAction =="create"?`${typeAction.toUpperCase()} A NEW POST`:`${typeAction.toUpperCase()} A POST`}</h1>
            <p className="text-base text-bold text-green-300">Please Fill The Form as Needed</p>
          </div>
            <FormProvider {...methods}>
              <form className="flex flex-col ml-36 mr-40" onSubmit={handleSubmit(onSubmit)} >  

                  <div className="flex flex-row">
                    <div className="flex flex-col my-20">
                        <PostInputTest  label="Title" register={methods.register} />
                        <PostInputTest  label="Authors" register={methods.register} />
                        <PostInputTest  label="Link" register={methods.register} />
                        <PostInputTest  label="Publisher" register={methods.register} />
                        <PostInputType styleError={false} label="Postype" control={methods.control}/>
                        <PostInputImage handleFileInput={onFileInput} register={methods.register}/>
                        <PbButton type="button" handleClick={confirmCardData} name="Confirm Data"/>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-4 h-fit my-20 ml-10">
                      <ResearchCardPost
                      handleCardClick={()=>console.log("clicked")}
                      research={{...researchData,id:0}}
                      type = {isDark}
                      />
                      <PbButton type="button" name={isDark?"Turn White": "Turn Dark"} handleClick={()=>setDark(!isDark)}/>
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
               
        </>

      );
}