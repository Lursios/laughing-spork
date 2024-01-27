"use client"
import { useState,useEffect,useRef } from "react";


const useScrollPosition = () => {

    const [scrollPosition,setScrollPosition] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null); // we need this to get the content width

    useEffect(()=> {

        
        const scrollWidth = contentRef.current?contentRef.current.scrollWidth: 0 ;
        // This is for horizontal scrolling
        const handleScroll= (event:WheelEvent)=> { // this is the function to handle the scrolling
            //this is correct but we need to add 3 more things a ref to trigger a component re-rnder 
            if (event.deltaY !== 0) {
                if (event.deltaY > 1 && scrollPosition <= Math.ceil(scrollWidth/61) ) { // 61 is the ratio of manaully reaching the position 
                    setScrollPosition(scrollPosition + 1)
                } else if (scrollPosition > 0 && event.deltaY < 1) {
                    setScrollPosition(scrollPosition - 1)
                } 
            }
        }
        document.addEventListener("wheel",handleScroll);

        return ()=> {
            document.removeEventListener("wheel",handleScroll); 
        }
        
    },[scrollPosition]); // we don't need to put ehe scroll position to be watch because the event listener is already watching the wheel changes on first render but we need it to keep track of the scroll position


    return {scrollPosition,contentRef}
};

export default useScrollPosition;