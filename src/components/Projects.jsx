import '../styles/projects.css';
import { useRef, useState } from 'react';
import { Fade } from 'react-reveal'

import marketImg from '../media/marketplace-img.png';
import webImg from '../media/web-service-img.png';
import deliveryImg from '../media/delivery-service-img.png';
import marketVid from '../media/marketplace-video.mp4'
import webVid from '../media/web-service-video.mp4'
import deliveryVid from '../media/delivery-service-video.mp4'

export default function Projects() {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState('delivery-service');

    const handleSlideChange = (slideId) => {
        setActiveSlide(slideId);
        const slideElement = document.getElementById(slideId);
        if (slideElement && sliderRef.current) {
        sliderRef.current.scrollTo({
            left: slideElement.offsetLeft,
            behavior: 'smooth',
        });
        }
    };

    return (
        <Fade right duration={1000}>
        <div id="projects">
            <div className='slider' ref={sliderRef}>
                <div id='marketplace' className={`project ${activeSlide === 'marketplace' ? 'active' : ''}`}>
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
                <div id='web-service' className={`project ${activeSlide === 'web-service' ? 'active' : ''}`}>
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
                <div id='delivery-service' className={`project ${activeSlide === 'delivery-service' ? 'active' : ''}`}>
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
            </div>
            <div className='slider-nav'>
                <button onClick={() => handleSlideChange('marketplace')}></button>
                <button onClick={() => handleSlideChange('web-service')}></button>
                <button onClick={() => handleSlideChange('delivery-service')}></button>
            </div>
        </div>
        </Fade>
    )
}