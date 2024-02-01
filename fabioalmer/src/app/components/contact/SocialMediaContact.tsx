import { FaInstagram,FaWhatsapp  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Tooltip } from 'react-tooltip'


const phoneNumber = "6282246272714"
const iconSize = "1.5rem"

const socialMedia = [
    {
        socialPlatform : "Instagram",
        socialIcon : <FaInstagram size={iconSize}/>,
        socialLink : "https://www.instagram.com/pak_tekfilip/"
    },
    {
        socialPlatform : "Gmail",
        socialIcon : <SiGmail size={iconSize}/>,
        socialLink : "fabioalmer@gmail.com"
    },
    {
        socialPlatform : "Whatsapp",
        socialIcon : <FaWhatsapp size={iconSize}/>,
        socialLink : `https://wa.me/${phoneNumber}?text=I'm%20inquiring%20about%20the%20apartment%20listing`
    }        
];
    

const SocialMediaComponent = ()=> {

    return (
        <div className="grid grid-cols-3 lg:grid-cols-1 w-fit p-2 gap-3 text-xs lg:text-base items-center">
            {socialMedia.map((social,index)=> 
                <a key={`social-${index+1}`} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center justify-center`} href={social.socialLink}>
                    <h1>{social.socialPlatform}</h1>
                    {social.socialIcon}
                </a>
            )}
        </div>
    )
}

export default SocialMediaComponent;