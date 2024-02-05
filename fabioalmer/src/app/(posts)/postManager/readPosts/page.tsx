import { getPosts } from "@/app/(portfolio)/api/ResearchHandler"
import PostTable from "@/app/components/articlePosts/PostTable";


export default async function ReadPost() {
  const data = await getPosts();

  return (
      <div className="flex flex-col">
        <PostTable
          datas={data}
        />
      </div>
  )
}

// "use client"
// import { getPosts } from "@/app/(portfolio)/api/ResearchHandler"
// import PostTable from "@/app/components/articlePosts/PostTable";
// import { useEffect,useState } from "react";


// export default function ReadPost() {

//   const [data,setData] = useState<any[]>([])
//   const [isLoading,setIsLoading] = useState<boolean>(true)

//   useEffect(()=> {
//     async function getit() {
//       const fetchedData = await getPosts();
//       setData(fetchedData)
//       setIsLoading(false)
//     }
//     getit()
//   },[])
 
//   return (
//       isLoading?
//       <div>Loading...</div>
//       :

//       <div className="flex flex-col">
//         <PostTable
//           datas={data}
//         />
//       </div>
//   )
// }