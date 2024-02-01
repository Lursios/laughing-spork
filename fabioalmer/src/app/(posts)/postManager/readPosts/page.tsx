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