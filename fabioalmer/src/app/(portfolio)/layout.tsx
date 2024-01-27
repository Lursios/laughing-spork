import Footer from "../components/Footer"
import type { Metadata } from 'next'
import Navbar from "../components/Navbar"
import { AnimatePresence } from "framer-motion"
import PageTransition from "./PageTransition"

export const metadata: Metadata = {
  title: 'Website Portofolio',
  description: 'My Own Personal Portofolio',
}

export default function Layout({children}: {children:React.ReactNode}) {

    return (
    <div className= "flex mx-auto w-screen h-screen flex-col md:flex-row items-center">
        <Navbar/>
          <PageTransition
            children= {children}
          />
          {/* {children} */}
        <Footer/>
    </div>

    )
}