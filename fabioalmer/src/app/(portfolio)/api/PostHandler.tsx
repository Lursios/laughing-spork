"use server"
import { PostValidationSchema } from "@/app/(posts)/articlePosts/createPost/page";
import axios from "axios";


// type handlePostSubmissionProps = {
//     data : PostValidationSchema
// }

export default async function handlePostSubmission(data:PostValidationSchema) {    
    // processing and saving the data into the database
    // 1 Processing which is to change the image as a cloudinary url
    const image = await handleImageUploader(data.image);

    console.log(image.data)

    if (image.data.secure_url) {
        data.image = image.data.secure_url
    }
    
    return "Successfully Submitted"
    
}

async function handleImageUploader(imageData:string) {

    const key = process.env.CLOUDINARY_API_KEY!
    const url = "https://api.cloudinary.com/v1_1/dz1i63qzt/image/upload"

    const formData = new FormData();

    formData.append("file",imageData)
    formData.append("upload_preset","project_fabio")
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