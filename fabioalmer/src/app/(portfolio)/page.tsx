import Image from 'next/image'
import profileSticker from "../../../public/images/Fabio-Sticker.png"

const MyPortofolio = ()=> {

  return (
    <div className='flex items-end w-full xl:w-[70%] h-screen' style={{backgroundImage: "url('/images/Cardboard.jpg')"}}>
      <div className='flex flex-col lg:flex-row items-end justify-center w-fit pb-20 lg:pb-0'>
        <div className='flex flex-col h-full w-full lg:mb-24 items-center justify-center font-inter font-extralight tracking-widest lg:ml-20 text-5xl xl:text-[80px] leading-normal lg:leading-normal opacity-60'> 
            <h1 className='mx-5 lg:mx-0'>Skolstrejk för klimatet </h1>
          </div>
          <Image 
            src={profileSticker}
            alt='Sticker of Mr Fabio' 
            className='animation-front-flip w-36'
          />      
        </div>
      </div>

     
  )
}

export default MyPortofolio;