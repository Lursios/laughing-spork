import { PostFooter } from "../../components/Footer"
import { PostManagerNavbar } from "../../components/Navbar"


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-shrink-0 w-11/12 mx-auto">
          <PostManagerNavbar/>
          {children}
          <PostFooter/>
        </div>
    )
  }