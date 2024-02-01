import { PostFooter } from "../../components/Footer"
import { PostManagerNavbar } from "../../components/Navbar"


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-fit min-h-screen">
          <PostManagerNavbar/>
          <div className="flex-1 box-border h-fit w-screen pt-32 px-36">
            {children}
          </div>
          <PostFooter/>
        </div>
    )
  }