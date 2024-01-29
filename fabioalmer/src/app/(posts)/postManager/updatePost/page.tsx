"use client"
import { CreateResearchType, FetchResearchType, ResearchType, getPosts } from "@/app/(portfolio)/api/ResearchHandler";
import TextEditor from "@/app/components/articlePosts/TextEditor";
import { useEffect, useRef, useState } from "react";
import { PostInputImage,PostInputSummary,PostInput,PostInputType } from "@/app/components/articlePosts/PostInputs";
import {useForm,Controller, FormProvider, set} from "react-hook-form";
import { custom, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResearchCardPost } from "@/app/components/publication&research/RNPbCard";
import PbButton from "@/app/components/publication&research/PbButton";
import handlePostSubmission, { handlePostUpdate } from "@/app/(portfolio)/api/PostHandler";
import Select from "react-select";
import _ from "lodash"


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


    const exampleValues = {

      title : "Here Lies The title",
      link : "www.porhub.com", // doi
      publisher : "OVO Sound",
      authors : "Lil Wayne, Drake, Kali Uchis",
      image : "https://res.cloudinary.com/dz1i63qzt/image/upload/v1701710133/IsoDefaultImage.png", //this the url to our save storage or something lah
      summary : "Click Generate Summary if you're lazy enough to do it",
      content : "Tell your story here :) ",
      postype:[{value:"publication",label:"Publication"},{value:"Research",label:"Research"}],

  }

    type UpdateOptions = {
      value: string;
      label: string;
    }

    const [isHidden,setHidden] = useState<boolean>(true)
    const [isDark,setDark] = useState<boolean>(true)
    const [posts,setPosts] = useState<FetchResearchType[]>([])
    const [updateOptions,setUpdateOptions]= useState<UpdateOptions[]>([])
    const postId = useRef(0)
    const [usedPost,setUsedPost] = useState<PostValidationSchema>(exampleValues)
  
    const methods = useForm<PostValidationSchema>({resolver:zodResolver(postValidationSchema),defaultValues:usedPost})

    const {handleSubmit,watch,setValue,reset,formState:{isSubmitSuccessful}} = methods
    const researchData = watch();

    const onSubmit = async (data:PostValidationSchema)=> {
      const result = await handlePostUpdate(data,postId.current); //This is equivalent of sending a POST request to our api route
      
      console.log("result :",result?result.updateResult:"error")  
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

    const handleChange = (chosenOption:any)=> {
      const selectedValue = chosenOption.value; // chosen title to update
      console.log(selectedValue);
      const data = posts.find((post)=> {
        return post.title === selectedValue //will return the correct data based on the title 
      })
      
      if (data) {
        const convertedPostype = data.postype.split(",").map((type:string)=> {return {value:type, label:type}});
        setUsedPost({...data,postype:convertedPostype}) // we update the state with the correct type;
        postId.current = data.id;
      } else {
        console.log("data aint there")
      }

    }

    useEffect(()=> { // execute when submitted
      if (isSubmitSuccessful){
        setPosts([])
        setUsedPost(exampleValues)
        setUpdateOptions([])
        postId.current = 0


      }
      
    },[isSubmitSuccessful])

    useEffect(()=> { //reset when the default value is change
      if (usedPost) {
        reset(usedPost)
      }

    },[usedPost])

    useEffect(()=> { // fetching data
      const fetchPosts = async ()=> {
        const fetchedPosts = await getPosts();
        const postOptions = fetchedPosts.map((post)=> {return {value:post.title,label:post.title}})
        setUpdateOptions(postOptions); 
        setPosts(fetchedPosts);
      }

      fetchPosts().catch((e)=> {
        console.error(e)
      })
      console.log("i was triggered")
    },[isSubmitSuccessful])
        
    return (
        <>
          <div className="flex flex-col ml-36 mt-10 mb-5 w-fit ">
            <h1 className="text-2xl text-extrabold text-white ">UPDATE A POST</h1>
            <p className="text-base text-bold text-yellow-500">Please Select First Before Filling The Form</p>
            <Select options={updateOptions} defaultInputValue="" className="w-[364px] my-2" onChange={handleChange} />
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
               
        </>

      );
}


