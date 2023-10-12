/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import '../styles/services.css'
import { Fade } from 'react-reveal'

export default function Services() {
    const [selectedService, setSelectedService] = useState('software-dev')

    function handleServiceClick(serviceName) {
        const serviceButtons = document.querySelectorAll('.service-buttons button');
        serviceButtons.forEach((button) => {
            button.classList.remove('selected');
        });


        const services = document.querySelectorAll('.service')
        services.forEach((service) => {
            service.classList.remove("fade-in")
            service.classList.add("fade-out-to-top")
        })
        setTimeout(() => {
            setSelectedService(serviceName);

            const clickedButton = document.querySelector(`button[data="${serviceName}"]`);

            if (clickedButton) {
                clickedButton.classList.add('selected');
            }
        }, 500);
    }

    return (
        <div id="services">
            <Fade bottom duration={1000}>
            <div className="services-container">
                <h3 className="component-heading">/ OUR SERVICES</h3>
                <div className="service-buttons">
                    <button data="software-dev" className="selected" onClick={() => handleServiceClick('software-dev')}>SOFTWARE DEVELOPMENT</button>
                    <button data="erp-system" onClick={() => handleServiceClick('erp-system')}>DEVELOPMENT OF A UNIQUE ERP SYSTEM</button>
                    <button data="store-dev" onClick={() => handleServiceClick('store-dev')}>ONLINE STORE DEVELOPMENT</button>
                    <button data="sup-upd" onClick={() => handleServiceClick('sup-upd')}>SUPPORT AND UPDATES</button>
                    <button data="bot-dev" onClick={() => handleServiceClick('bot-dev')}>BOT DEVELOPMENT</button>
                    <button data="web-trans" onClick={() => handleServiceClick('web-trans')}>WEBSITE TRANSFERRING</button>
                </div>
                <div className="service-display">
                    {selectedService === 'software-dev' && (
                        <div className="service fade-in" id="software-dev-container">
                            <div>
                                <p>
                                    Our software is aiming to solve your business problems and meet specific
                                    business needs. Our experienced team can develop software for a wide range of industries and
                                    applications, especially agriculture, finance, healthcare, and logistics, among others. Our goal
                                    is to deliver high-quality software that will solve your business tasks and problems, and
                                    optimize your working processes to help your business grow.
                                </p>
                                <div>
                                    <ul className="bullets">
                                        <li>- Qualitatively</li>
                                        <li>- Fast</li>
                                        <li>- Promising</li>
                                    </ul>
                                    <span>/ QUALITY BIASED</span>
                                </div>
                            </div>
                            <button className="want-button">Want</button>
                        </div>
                    )}
                    {selectedService === 'erp-system' && (
                        <div className="service fade-in" id="erp-system-container">
                            <div>
                                <p>
                                    Developing customized ERP (Enterprise Resource Planning) systems that
                                    streamline your' business operations, improve communication between departments and automate
                                    processes. Our ERP solutions are tailored to the unique needs of your business and can be
                                    integrated with other software solutions to provide a comprehensive business management
                                    system.
                                </p>
                                <div>
                                    <ul className="bullets">
                                        <li>- Everyone Matters</li>
                                        <li>- Leadership is Here To Serve</li>
                                        <li>- Resilient</li>
                                    </ul>
                                    <span>/ FRIENDLY RELATIONS</span>
                                </div>
                            </div>
                            <button className="want-button">Want</button>
                        </div>
                    )}
                    {selectedService === 'store-dev' && (
                        <div className="service fade-in" id="store-dev-container">
                            <div>
                                <p>We offer online-store development services for clients who want to
                                    create an online presence for their business. Our team can build and design a customized
                                    e-commerce website that is easy to use and provides a seamless user experience. Our goal is to
                                    help you increase your online sales, expand customer base, and improve overall business
                                    performance. Deep understanding and large experience allows us to build the most conversional
                                    online-stores for you.
                                </p>
                                <div>
                                    <ul className="bullets">
                                        <li>- Continuous improvements</li>
                                        <li>- Quality</li>
                                        <li>- Efficiency</li>
                                    </ul>
                                    <span>/ EXPIRIENCE AND TRANSPERENCY</span>
                                </div>
                            </div>
                            <button className="want-button">Want</button>
                        </div>
                    )}
                    {selectedService === 'sup-upd' && (
                        <div className="service fade-in" id="sup-upd-container">
                            <div>
                                <p>We offer ongoing support and updates to ensure that your software
                                    solutions remain up-to-date and fully functional. Our support team is always ready to fix any
                                    issues or concerns that arise, so we provide regular updates to improve performance and add new
                                    features if needed. Our goal is to provide our clients with peace of mind and ensure that their
                                    software solutions continue to meet their needs over time.
                                </p>
                                <div>
                                    <ul className="bullets">
                                        <li>- Communication</li>
                                        <li>- Improvement</li>
                                        <li>- Expertise</li>
                                    </ul>
                                    <span>/ IMPROVEMENTS</span>
                                </div>
                            </div>
                            <button className="want-button">Want</button>
                        </div>
                    )}
                    {selectedService === 'bot-dev' && (
                        <div className="service fade-in" id="bot-dev-container">
                            <div>
                                <p>We specialize in developing customized bots that can automate tasks and
                                    improve efficiency. We can create bots for a wide range of applications, including customer
                                    service, social media, and sales, among others. Our goal is to provide you with cutting-edge
                                    technology that improves their productivity and enhances their customer experience.
                                </p>
                                <div>
                                    <ul className="bullets">
                                        <li>- Automation</li>
                                        <li>- Innovation</li>
                                        <li>- Quality</li>
                                    </ul>
                                    <span>/ SAFE</span>
                                </div>
                            </div>
                            <button className="want-button">Want</button>
                        </div>
                    )}
                    {selectedService === 'web-trans' && (
                        <div className="service fade-in" id="web-trans-container">
                            <div>
                                <p>We offer website transferring services for clients who want to move
                                    their website from one platform to another. Our team of developers can ensure that the
                                    transition is smooth and seamless, and that the website remains fully functional throughout the
                                    process. Our goal is to minimize any disruptions to our clients' online presence and ensure that
                                    their website continues to meet their business needs.
                                </p>
                                <div>
                                    <ul className="bullets">
                                        <li>- Skills</li>
                                        <li>- Experience</li>
                                        <li>- Result</li>
                                    </ul>
                                    <span>/ QUICKLY</span>
                                </div>
                            </div>
                            <button className="want-button">Want</button>
                        </div>
                    )}
                </div>
            </div>
            </Fade>
        </div>
    )
}