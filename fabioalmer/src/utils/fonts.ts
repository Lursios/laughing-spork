import { Crimson_Text } from 'next/font/google'
import { Faster_One } from "next/font/google"


export const fasterOne = Faster_One({weight:"400",subsets:["latin"]})
export const crimsonText = Crimson_Text({weight:"400", subsets:["latin"]})

export const imageStyle = {
    borderRadius: '2%',
    border: '0.25rem solid #41180Fff',
  }


export function titleStyle(title:string) { 

  const titleCharCount = title.length
  if (titleCharCount <100 ) {
      return "text-2xl"
  } else if (titleCharCount < 270 ) {
      return "text-xl"
  } else if (titleCharCount < 450) {
      return "text-l"
  } else {
      return "not a valid text length please check again"
  }
}   

const makeItShort = (text:string)=> {
    const wordLimit = 300;

    if (text.length >= wordLimit ) {
        const shorter = true
        return {
            text: text.slice(0,wordLimit),
            shorter
        }
    } else {
        const shorter = false
        return {text,shorter}
    }
}

export {makeItShort}