import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"


type SideImageProps = {
    imageFile : string  | StaticImport ;
    alt : string ;
    textContent : string;
    imagePostion : "right" | "left" 
}

const SideImage = ({imageFile,alt,textContent,imagePostion}:SideImageProps)=> {
    return (
        <div className={`flex ${imagePostion === "left"?"flex-row":"flex-row-reverse"} font-montserrat font-extrabold text-xs`}>
            <div className="relative w-[150%] aspect-square">
                <Image 
                src={imageFile}
                alt={alt}
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex items-center justify-center w-[150%] bg-black py-12 text-xs lg:text-xl ">
                <h1 className="mx-5">{textContent}</h1>
            </div>
        </div>
    )
}

export default SideImage;