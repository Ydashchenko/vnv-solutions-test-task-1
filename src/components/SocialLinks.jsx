import instagramLogo from '../media/instagram-img.svg'
import facebookLogo from '../media/facebook-img.svg'
import linkedInLogo from '../media/linkedin-img.svg'
import tikTokLogo from '../media/tiktok-img.svg'
import '../styles/social-links.css'
import { Fade } from "react-awesome-reveal";

export default function SocialLinks() {
    return (
        <div id='social-links'>
            <Fade bottom>
            <div className="social-links-container">
                <h3 className='component-heading'>/ FOLLOW US!</h3>
                <div className="social-media-links">
                    <div className="instagram">
                        <img src={instagramLogo} alt="instagram" />
                        <h6>Instagram</h6>
                    </div>
                    <div className="facebook">
                        <img src={facebookLogo} alt="facebook" />
                        <h6>Facebook</h6>
                    </div>
                    <div className="linkedin">
                        <img src={linkedInLogo} alt="linkedin" />
                        <h6>LinkedIn</h6>
                    </div>
                    <div className="tiktok">
                        <img src={tikTokLogo} alt="tiktok" />
                        <h6>TikTok</h6>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}