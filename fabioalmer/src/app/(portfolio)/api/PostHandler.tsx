"use server"
import { PostValidationSchema } from "@/app/(posts)/postManager/createPost/page";
import axios from "axios";
import { createPost, updatePosts } from "./ResearchHandler";



const createURL = (path:string)=> {
    return window.location.origin + path
}

export async function handlePostUpdate(data:PostValidationSchema,postId:number) {
    // process the data so it can be submitted to the db 
    const updatedImage = await handleImageUploader(data.image)
    const type = data.postype.map((postype)=> postype.value).toString();
    // 2. the pass data datatype on the update post function is a createResearchType
     const newData = {...data,postype:type,id:postId,image:updatedImage.secure_url}
    // 2.1 add the id inside the datatype then we pass the process data
    const updateResult = await updatePosts(newData);

    if (updateResult) {

        return {updateResult}

    } else {
        console.log("error when updating to db")
    }
}


export default async function  handlePostSubmission(data:PostValidationSchema) {    
    const image = await handleImageUploader(data.image);
    const type = data.postype.map((postype)=> postype.value).toString();

    if (image.statusText == "OK") {
        data.image = image.data.secure_url
        const result = await createPost({...data,postype:type})
        return result
    } else {
        return "error when uploading image to cloudinary"
    }       
}

async function handleImageUploader(imageData:string) {


    if (imageData.includes('https://res.cloudinary.com/')) {
        // since it's already a link then we don't need to create one in case of update more or less
        return {
            statusText: "OK",
            data:{secure_url:imageData}
        }

    } else {
        const key = process.env.CLOUDINARY_API_KEY!
        const url = "https://api.cloudinary.com/v1_1/dz1i63qzt/image/upload"
    
        const formData = new FormData();
    
        formData.append("file",imageData)
        formData.append("upload_preset","project_fabio") // project-fabio is a created preset on cloudinary
        formData.append("api_key",key)
    
        const result = await axios.post(url,formData).then((res)=> {
            return res
        }).catch((error)=> {
            return error
        })
    
        //data.secureUrl or data.url to return the cloudinary url
        //.statusText return the connection status result
        return result
    }
  
}


export const handlePostDeletion = async (id:number)=> {

    const url = createURL('/api/Poster');
    const formData = new FormData();
    formData.append("id",String(id));

    const res = await fetch(new Request(url,{
        method: 'DELETE',
        body: formData 
    }));

    if (res.ok) {
        const data = await res.json();
        return data.data
    }
}

