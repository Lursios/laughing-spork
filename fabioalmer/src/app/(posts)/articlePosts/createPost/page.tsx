"use client"
import { ResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import TextEditor from "@/app/components/articlePosts/TextEditor";
import {Editor} from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import PostInput, { PostInputImage,PostInputSummary,PostInputTest,PostInputType } from "@/app/components/articlePosts/PostInputs";
import {useForm,Controller, FormProvider} from "react-hook-form";
import { custom, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResearchCardPost } from "@/app/components/publication&research/RNPbCard";
import PbButton from "@/app/components/publication&research/PbButton";





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

    const [typeAction,setTypeAction] = useState<string>("create");

    const refTester = useRef<boolean>(true);
    const [isHidden,setHidden] = useState<boolean>(true)
  
    const methods = useForm<PostValidationSchema>({resolver:zodResolver(postValidationSchema),
      defaultValues:{
        title : "Just to test on the functionality making sure",
        link : "test", // doi
        publisher : "test",
        authors : "test",
        image : "test", //this the url to our save storage or something lah
        summary : "test",
        content : "This is the content fetch data",
        postype:[{value:"publication",label:"publication"},{value:"publication",label:"publication"}],

    }})

    const {
      register,
      handleSubmit,
      watch,
      control,
      formState: {errors},
    } = methods
        
    const researchData = watch();

    // const [researchData,setReseearchData] = useState<ResearchType>({
    //     id:"",
    //     title : "Just to test on the functionality making sure",
    //     link : "", // doi
    //     publisher : "",
    //     authors : "",
    //     image : "", //this the url to our save storage or something lah
    //     summary : "",
    //     content : "This is the content fetch data"
    //     }
    // );
    

    const onSubmit = (data:PostValidationSchema)=> {
      console.log("submitted")
      const newData = JSON.stringify(data);
      console.log("submitted")
      alert(newData)
    }

    const confirmCardData = ()=> {
      setHidden(false)
    }

    const cancelCardData = ()=> {
      setHidden(true);
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
                        <PostInputImage register={methods.register}/>
                        <PbButton type="button" handleClick={confirmCardData} name="Confirm Data"/>
                    </div>

                    <div className="flex h-fit my-20 ml-10">
                      <ResearchCardPost
                      handleCardClick={()=>console.log("clicked")}
                      research={{...researchData,id:""}}
                      />
                    </div>     
                  </div>

                  <div  hidden ={isHidden} className={isHidden?"":"flex flex-col "} >
                    
                    <TextEditor
                    name="content"
                    control={methods.control}
                    />
                    <PostInputSummary
                    register={methods.register}
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