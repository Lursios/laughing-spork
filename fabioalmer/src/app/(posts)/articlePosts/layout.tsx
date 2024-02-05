import { PostFooter } from "../../components/Footer"
import { PostNavbar } from "../../components/Navbar"


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen max-w-[680px] items-center">
            <PostNavbar/>
            <div className="flex justify-center max-w-[680px] min-h-screen lg:m-6">
              {children}
            </div>
            <PostFooter/>
        </div>
     
    )
  }