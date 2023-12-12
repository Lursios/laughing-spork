import { PostFooter } from "../../components/Footer"
import { PostNavbar } from "../../components/Navbar"


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-11/12 mx-auto">
          <PostNavbar/>
          {children}
          <PostFooter/>
        </div>
    )
  }