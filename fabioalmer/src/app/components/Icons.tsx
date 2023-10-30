import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaWhatsapp} from "@react-icons/all-files/fa/FaWhatsapp";
import {FaSpotify} from "@react-icons/all-files/fa/FaSpotify";

type IconsProps = {
    spotifyClick : ( ) => void
}

export default function Icons({spotifyClick}:IconsProps) {
    const whatsAppNumber = "6287785823583"
    const urlText = "I'm%20inquiring%20about%20the%20apartment%20listing"
    const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${urlText}`

    return(
        <div className='flex flex-row m-3 justify-evenly'>
            <a target='_blank' rel='noopener noreferrer'  href ="https://www.instagram.com/pak_tekfilip/">
                <FaInstagram className="mr-5" size="2.5rem"/>
            </a>

            <a target='_blank' rel='noopener noreferrer' href ="https://www.linkedin.com/in/fabio-almer-agoes/">
                <FaLinkedin  className="mr-5" size="2.5rem" />
            </a>
        
            <a target='_blank' rel='noopener noreferrer' href ={whatsAppUrl} >
                <FaWhatsapp  className="mr-5" size="2.5rem" />
            </a>
            
            <a onClick={() => spotifyClick() }>
                <FaSpotify size="2.5rem"/>
            </a> 
        </div>
    )
}