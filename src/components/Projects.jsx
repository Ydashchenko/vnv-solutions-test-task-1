import '../styles/projects.css';
import { Fade } from "react-awesome-reveal";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import marketImg from '../media/marketplace-img.png';
import webImg from '../media/web-service-img.png';
import deliveryImg from '../media/delivery-service-img.png';
import marketVid from '../media/marketplace-video.mp4'
import webVid from '../media/web-service-video.mp4'
import deliveryVid from '../media/delivery-service-video.mp4'

export default function Projects() {
    return (
        <Fade direction='right'>
        <div id="projects">
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            infinite
            totalSlides={3}
            >
            <Slider className='slider'>
                <Slide index={0}>
                <div id='marketplace' className="project">
                    <a href="https://volstinyproduction.com/" target="_blank" rel="noreferrer">
                        <img className='project-img' src={marketImg} alt="market-img" draggable="false" />
                    </a>
                    <video className='project-video' autoPlay loop muted src={marketVid}></video>
                    <div>
                        <div className='project-header-container'>
                            <h3>01 /</h3>
                            <h3>Marketplace</h3>
                        </div>
                        <p>
                            Volstiny production - Marketplace for a Designers agency. Powerful
                            and creative website for powerfull creators. Unique design, a lot of animations and
                            internal marketplace - website is faster than a Forest Gump and ready for a SEO ad
                            campaigns.
                        </p>
                    </div>
                </div>
                </Slide>
                <Slide index={1}>
                <div id='web-service' className="project">
                    <a href="https://www.learnitlive.com/" target="_blank" rel='noreferrer'>
                        <img className='project-img' src={webImg} alt="web-img" draggable="false" />
                    </a>
                    <video className='project-video' autoPlay loop muted src={webVid}></video>
                    <div>
                        <div className='project-header-container'>
                            <h3>02 /</h3>
                            <h3>Web-Service</h3>
                        </div>
                        <p>
                            Lernitlive - webservice for coaches and experts where they can teach
                            online. In easy words - it is a marketplace with some more functionality to pass courses
                            and take classes. You can look throug the courses, choose your coach, according to his
                            rate and reviews. Functionality: you can register,buy classes, chat with your coach and
                            leave reviews.
                        </p>
                    </div>
                </div>
                </Slide>
                <Slide index={2}>
                <div id='delivery-service' className="project">
                    <a href="" target="_blank">
                        <img className='project-img' src={deliveryImg} alt="delivery-img" draggable="false" />
                    </a>
                    <video className='project-video' autoPlay loop muted src={deliveryVid}></video>
                    <div>
                        <div className='project-header-container'>
                            <h3>03 /</h3>
                            <h3>Delivery Service</h3>
                        </div>
                        <p>
                            Iren Banquet Hall - Delivery service for tasty food from Iren. You
                            can register, order and pay not leaving the website!
                        </p>
                    </div>
                </div>
                </Slide>
            </Slider>
            </CarouselProvider>
        </div>
        </Fade>
    )
}