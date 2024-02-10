import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import './index.scss'

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {setTimeout(() => setLetterClass('text-animate-hover'), 3000)}, [])
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
                        <form>
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