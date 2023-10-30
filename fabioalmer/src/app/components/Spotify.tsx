
import Draggable from "react-draggable"

type spotifyProps = {
    hiddenStatus : boolean
}

export default function Spotify({hiddenStatus}:spotifyProps) {
    const eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };

    return (
    <Draggable>
        <div className='m-5 overflow-hidden'>
            <iframe hidden={hiddenStatus} 
            className="rounded-xl border-0 overflow-auto"
            src="https://open.spotify.com/embed/playlist/6urysrNzElywXvZ0VRcUWk?utm_source=generator&theme=0"
            width="100%" 
            height="80" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            > 
            </iframe>
        </div>  
    </Draggable>
    )
}