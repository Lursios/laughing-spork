"use client"
import { usePathname } from "next/navigation";

const PageTransition = ({children}:{children:React.ReactNode})=> {

    const trigger = usePathname(); // this will trigger a change in the key when the page changes so it forces the component to re-render 

    return (
        <div key={trigger} id="main" className="flex flex-col lg:h-3/4 lg:w-2/3 lg:overflow-y-scroll lg:no-scrollbar animate-slide-left">
            {children}
        </div>
    )
}  

export default PageTransition;