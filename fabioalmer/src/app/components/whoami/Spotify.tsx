"use client"

type spotifyProps = {
    hiddenStatus : boolean
}

export default function Spotify({hiddenStatus}:spotifyProps) {

    return (
        <div className='my-[5px] mr-[5px]'>
            <iframe hidden={hiddenStatus} 
            className="rounded-xl"
            src="https://open.spotify.com/embed/playlist/6urysrNzElywXvZ0VRcUWk?utm_source=generator&theme=0"
            width="100%" 
            height="352" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            > 
            </iframe>
        </div>  
    )
}