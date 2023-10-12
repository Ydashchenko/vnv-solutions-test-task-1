import '../styles/whyus.css'
import { Fade } from 'react-reveal'

export default function WhyUs() {
    return (
        <div id='why-us'>
            <Fade left duration={1500}>
            <div className='why-container'>
                <h3 className='component-heading'>/ WHY US?</h3>
                <ul className='why-list'>
                    <li><span className="animated-text">Focused</span> Towards Project Objectives</li>
                    <li>Project Management at Its <span className="animated-text">Best</span></li>
                    <li><span className="animated-text">Great</span> Leadership Skills</li>
                    <li>Professional Team of Software <span className="animated-text">Developers</span></li>
                    <li><span className="animated-text">Transparent</span> Communication</li>
                    <li>Quality <span className="animated-text">Assurance</span></li>
                </ul>
                <button className="order-button">Order</button>
            </div>
            </Fade>
        </div>

    );
}
