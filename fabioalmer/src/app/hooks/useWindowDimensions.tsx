'use client'
import { useState,useEffect} from "react"


export type WindowDimensions = {
    screenWidth: number,
    isMobileScreen: boolean;
    limitReviews:number;
  };

export default function useWindowDimension():WindowDimensions {

    function avatarLimit() {
        return Math.floor(screenWidth/16) //16 is the width of the circle Avatar
    }

    const [screenWidth, setScreenWidth] = useState(1024)
    const [isMobileScreen,setIsMobileScreen ]= useState<boolean>(false) // this for checking is it a mobile screen witdth or nah
    const [limitReviews,setLimitReviews] = useState<number>(1024/64) 
    
    // render so that the changes will take effect 

    useEffect(()=> {
        handleResize()
        function handleResize(){
            setScreenWidth(window.innerWidth);
            setLimitReviews(Math.floor(window.innerWidth/64))
            if(screen.width <= 768) {
                setIsMobileScreen(true)
            } else {
                setIsMobileScreen(false)
            }
        }
        window.addEventListener('resize',handleResize);
        return ()=> window.removeEventListener('resize',handleResize);

    },[])


    return {
        screenWidth,
        isMobileScreen,
        limitReviews
    }

}
