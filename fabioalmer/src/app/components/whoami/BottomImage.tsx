import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type BottomImageProps = {
    imageFile : string | StaticImport;
    alt : string;
    textContent : string
    coverPosition : "top"|"center"
}

const BottomImage = ({imageFile,alt,textContent,coverPosition}:BottomImageProps)=> {
    return (
        <div className="flex flex-col">
        <div className="relative w-full h-[200px] lg:h-[400px] aspect-square">
            <Image 
            src={imageFile}
            alt={alt}
            fill
            className="object-cover"
            style={{objectPosition:coverPosition}}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
            />
        </div>
        <div className="flex items-center justify-center font-extrabold w-full bg-black py-4 text-xs lg:text-lg ">
            <h1 className="mx-5">{textContent}</h1>
        </div>
    </div>
    )
}

export default BottomImage;
