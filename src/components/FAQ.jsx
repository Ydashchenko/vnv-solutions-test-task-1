import '../styles/faq.css'
import { Fade } from 'react-reveal'

export default function FAQ() {
    return (
        <div id='faq'>
            <Fade top>
            <div className='faq-container'>
                <h3 className='component-heading'>/ FAQ</h3>
                <div className="faqs">
                    <div className="faq">
                        <div className="question">How can your IT company help improve our cybersecurity?</div>
                        <p className='answer'>Our IT company offers a range of cybersecurity services, including threat assessments, penetration testing, and security software implementation. We can help identify vulnerabilities, develop security policies, and deploy the latest security measures to protect your data and systems from cyber threats.</p>
                    </div>
                    <div className="faq">
                        <div className="question">What IT infrastructure and cloud services do you provide?</div>
                        <p className='answer'>We offer a comprehensive suite of IT infrastructure services, including server management, network setup, and cloud computing solutions. Our cloud services encompass data storage, backup, and migration, enabling you to leverage scalable and cost-effective cloud technologies.</p>
                    </div>
                    <div className="faq">
                        <div className="question">How can your IT solutions optimize our business processes?</div>
                        <p className='answer'>Our IT solutions are designed to streamline and enhance your business operations. We offer custom software development, automation, and integration services to improve efficiency, reduce manual tasks, and provide data-driven insights to make informed decisions.</p>
                    </div>
                    <div className="faq">
                        <div className="question">Do you offer IT support and maintenance services?</div>
                        <p className='answer'>Yes, we provide ongoing IT support and maintenance to ensure your systems run smoothly. Our services include help desk support, system updates, and proactive monitoring to address issues before they become critical, minimizing downtime and disruptions to your business.</p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}