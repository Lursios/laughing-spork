"use client"
import Image from 'next/image'
import profilePic from "../../public/images/Prof_Pic.jpg"
import {useEffect, useState} from "react"

import Spotify from './components/Spotify'
import GetToKnowMe from './components/GetToKnowMe'
import Icons from './components/Icons'


export default function MyPortofolio() {

  const [isHiddenSpotify,setHiddenSpotify] = useState(true)


  function handleSpotifyClick() {
    setHiddenSpotify(!isHiddenSpotify)
  }


  useEffect(()=> {
    setHiddenSpotify(false);
    setHiddenSpotify(true);
    console.log("this was loaded at first")
  },[])

  return (
    <div className= "flex w-4/5 mx-auto pl-14 pr-14 mt-6">

      <div className="w-1/2 flex flex-col justify-center items-center">
          <Image
          src={profilePic}
          alt='Picture of Author'
          width={450}
          height={510}
          className='border-solid border-black border-4 rounded-xl '
          />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">

        <div className='h-1/2'>
            <blockquote className="bg-gray-100 border-l-4 rounded-lg border-gray-400 p-4 m-4 mt-0 text-gray-600 italic">
              <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin volutpat interdum. 
              Vestibulum at purus egestas, tempus urna ut, suscipit mauris. 
              Integer at mauris ligula. Nam scelerisque pulvinar tellus, id interdum 
              eros rutrum vel. Sed risus ante, viverra id lorem ut, sollicitudin luctus lorem. 
              Pellentesque ac egestas lorem. Quisque volutpat
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla a metus id leo laoreet semper
              eros rutrum vel. Sed risus ante, viverra id lorem ut, sollicitudin luctus lorem. 
              Pellentesque ac egestas lorem. Quisque volutpat
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
              <br></br>
              <span className="text-blue-500 italic"> - Fabio Almer Agoes S.T, M.Sc </span>
              </p>
            </blockquote> 
        </div>

        <div className="h-1/2 flex flex-col items-center justify-center"> 
          <Icons
          spotifyClick={handleSpotifyClick}
          />

          <Spotify
          hiddenStatus = {isHiddenSpotify}
          />

          <GetToKnowMe/>

        </div>
      </div>

    </div>
    
  )
}