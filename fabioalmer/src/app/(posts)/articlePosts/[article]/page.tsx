"use client"
import { useSearchParams } from "next/navigation"
import { handleGetPost } from "@/app/(portfolio)/api/TempHandler";
import { useEffect,useState,ReactNode } from "react";
import parser,{Element} from "html-react-parser"
import type { DOMNode,HTMLReactParserOptions } from "html-react-parser";
import { posTypeSeperator } from "@/utils/postFunction";
import Loading from "../loading";


type articlePage = {
    title : string;
    authors : string;
    postype : string[];
    content : string;
}

const articlePage = ()=> {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    const [isLoading,setIsLoading] = useState<boolean>(true)

    const [fetchedData,setFetchedData] = useState<articlePage>(
        {
            authors:"",
            title:"",
            content:"",
            postype:[]
        }

    )

    const options:HTMLReactParserOptions = { // i still don't understand for certain how this one work but if we use typescript we need to add this
    replace(domNode: DOMNode ) {
        if (
            domNode instanceof Element && 
            domNode.attribs && 
            domNode.attribs.class == "remove"
            
        )   {
                return <></>
            }
        }
    }
    
    useEffect(()=> {
        const getPost = async ()=> {
            if (id) {
                const data = await handleGetPost(id)
                const parsedContent = parser(data.content,options); // parse the string html to just pure html
                const postTypes = posTypeSeperator(data.postype); // seperate the postype to each types
                setFetchedData({...data,content:parsedContent,postype:postTypes})
                setIsLoading(false)
            }
        }
        
        getPost()

    },[])
    
    return (
        isLoading?
        <Loading/>
        :

        <div className="flex flex-col w-screen gap-7 px-3">
            <div className="flex flex-col items-center ">   
                <div className="text-xl text-center font-bold">{fetchedData.title}</div>
                <div className="text-lg">{`By: ${fetchedData.authors}`}</div>
                <div className="flex flex-row gap-1">
                    {fetchedData.postype.map((type,index)=> (
                        <div key={`${index}-${type}`} className="badge">{type}</div>
                    ))}
                </div>
            </div>
            <div className="text-justify">
                {fetchedData.content}
            </div>
        </div>
    )
}

export default articlePage;