"use client"

import { useParams,useSearchParams } from "next/navigation"
import { getPostById} from "@/app/(portfolio)/api/ResearchHandler";
import { useEffect,useState,ReactNode } from "react";
import { ResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import parser,{Element} from "html-react-parser"
import type { DOMNode,HTMLReactParserOptions } from "html-react-parser";


export default function DynamicPost() {

    const [research,setResearch] = useState<ResearchType>( {
        id:0,
        title : "",
        link : "", // doi
        publisher : "",
        authors : "",
        image : "", //this the url to our save storage or something lah
        summary : "",
        content : ""
    })

    const searchParams = useSearchParams();
    const params = useParams();
    const id = Number(searchParams.get("id"))
    


    const options:HTMLReactParserOptions = { // i still don't understand for certain how this one work but if we use typescript we need to add this
        replace(domNode: DOMNode ) {
            if (
                domNode instanceof Element && 
                domNode.attribs && 
                domNode.attribs.class == "remove"
            ){
                return <></>
            }
        }
    }

    
    useEffect(()=> {

        async function fetchResearch(researchId:number) {
            const data = await getPostById(researchId)
            setResearch(data)
        };

        fetchResearch(id)

    },[])
    //it will pass the name of the params and then it's going to fetch based on the name ? or id ? or something ?
    const researchContents = parser(research.content,options);

    return (
        <div className="font-bold">
            {researchContents}
        </div>

    )
}