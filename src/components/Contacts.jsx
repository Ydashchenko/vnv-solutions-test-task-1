import { useState } from 'react';
import '../styles/contacts.css'
import emailLogo from '../media/email-img.png'
import telegramLogo from '../media/telegram-img.svg'
import whatsappLogo from '../media/whatsapp-img.svg'
import viberLogo from '../media/viber-img.svg'
import { Fade } from "react-awesome-reveal";


export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        communicationMethod: 'email',
        contactInfo: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to the server
        console.log('Form Data:', formData);
    };

    const renderContactInfoField = () => {
        if (formData.communicationMethod === 'email') {
        return (
            <input
            type="email"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
            />
        );
        } else if (formData.communicationMethod === 'phone') {
        return (
            <input
            type="tel"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            />
        );
        } else if (formData.communicationMethod === 'telegram') {
        return (
            <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleInputChange}
            placeholder="Telegram Nickname"
            required
            />
        );
        }
        return null;
    };

    return (
        <div id="contacts">
            <div className="contacts-container">
                <Fade direction='right'>
                    <h3 className="component-heading">/ CONTACT US!</h3>
                </Fade>
                <div className="contacts-body">
                    <Fade direction='right'>
                    <div className="messenger-links">
                        <div className="email messenger-link">
                            <img src={emailLogo} alt="email" />
                            <h5>team@vnv.solutions</h5>
                        </div>
                        <div className="telegram messenger-link">
                            <img src={telegramLogo} alt="telegram" />
                            <h5>@vnv_solutions</h5>
                        </div>
                        <div className="whatsapp messenger-link">
                            <img src={whatsappLogo} alt="whatsapp" />
                            <h5>Whats App</h5>
                        </div>
                        <div className="viber messenger-link">
                            <img src={viberLogo} alt="viber" />
                            <h5>Viber</h5>
                        </div>
                    </div>
                    </Fade>
                    <Fade direction='left' duration={1000}>
                    <form className='feedback' onSubmit={handleSubmit}>
                        <div>
                            <img src={emailLogo} alt="Email"/>
                        </div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            required
                        />
                        <select
                            name="communicationMethod"
                            value={formData.communicationMethod}
                            onChange={handleInputChange}
                        >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="telegram">Telegram</option>
                        </select>
                        {renderContactInfoField()}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            required
                        />
                        <button type="submit">Send</button>
                    </form>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
