"use client"
import { handleDeletePost } from "@/app/(portfolio)/api/TempHandler";
import { FetchResearchType } from "@/app/(portfolio)/api/ResearchHandler";
import Link from "next/link";
import { ChangeEvent } from "react";
import {useRouter} from "next/navigation";


type PostTableProp = {
    datas : FetchResearchType[]
}

const PostTable = ({datas}:PostTableProp)=> {

    const router = useRouter()

    const handleClick = async (id:number,content:string)=> {
        const newId = String(id)
        const deletedPost = await handleDeletePost({id:newId,content});
        console.log(deletedPost);
        router.refresh()
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="text-black text-xl">
                    <tr>
                        <th>Id</th>
                        <th>Publication Research Name</th>
                        <th>Publisher</th>
                        <th>Authors</th>
                        <th>Content Page</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {datas.map((data)=> (
                        <tbody key={`Post${data.id}`}>
                        <tr>
                            <th>{data.id}</th>
                            <td>
                                <div className="font-bold">{data.title}</div>
                            </td>
                            <td>
                                {data.publisher}
                            <br/>
                                <span className="badge badge-ghost badge-sm">{data.postype}</span>
                            </td>
                                <td>{data.authors}</td>
                            <th>
                                <Link href={`/articlePosts/postManager?id=${data.id}`} className="flex items-center justify-center" >
                                    <button className="btn btn-ghost btn-xs">Go!</button>
                                </Link>
                            </th>
                            <th>
                            <label>
                                <button onClick={()=>handleClick(data.id,data.title)} className="btn btn-outline btn-error">Delete</button>
                            </label>
                            </th>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default PostTable;