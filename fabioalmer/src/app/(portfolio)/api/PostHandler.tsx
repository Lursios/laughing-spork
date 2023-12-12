"use server"
import { PostValidationSchema } from "@/app/(posts)/postManager/createPost/page";
import axios from "axios";
import { createPost } from "./ResearchHandler";


// type handlePostSubmissionProps = {
//     data : PostValidationSchema
// }

export default async function handlePostSubmission(data:PostValidationSchema) {    
    // processing and saving the data into the database
    // 1 Processing which is to change the image as a cloudinary url
    const image = await handleImageUploader(data.image);
    const type = data.postype.map((postype)=> postype.value).toString();

    if (image.statusText == "OK") {
        data.image = image.data.secure_url
        const result = await createPost({...data,postype:type})
        return result
    } else {
        return "something happened"
    }       
}

async function handleImageUploader(imageData:string) {


    if (imageData.includes('https://res.cloudinary.com/')) {
        // since it's already a link then we don't need to create one in case of update more or less
        return imageData

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