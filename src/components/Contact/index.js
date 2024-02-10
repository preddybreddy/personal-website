import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser'
import './index.scss'

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {setTimeout(() => setLetterClass('text-animate-hover'), 3000)}, [])
    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_wbxul7h', 'template_plmjkss', form.current, 'SJYf53FMkb0sYibbW')
                .then(
                    () => {
                        alert('Message sent successfully!')
                        window.location.reload(false)
                    }, 
                    () => {
                        alert('Failed to send the message, please try again!')
                    }
                )      
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                      <input placeholder="Name" type='text' name='name' required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>      
        </>
    )
}