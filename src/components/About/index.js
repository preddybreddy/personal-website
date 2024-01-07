import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import { useState } from 'react'

export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutMe = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
    useEffect(() => {
        setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)
    }, [])
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutMe} idx={15} />
                </h1>
                <p>
                    I am currently pursuing my Master's degree in Computer Science at Ohio University. 
                    My research is in the field of Bioinformatics, where I am working on developing an algorithm 
                    to predict the probability of two genes intereacting using the <a target="_blank" href='https://www.nature.com/articles/s41576-019-0195-2'>GAM</a> data matrix. 
                    <br />
                    <br />
                    After graduation I am looking for Full-stack development roles, where I look forward
                    to bring my 2+ years of industry SWE experience along with my algorithmic research knowledge from graduate school.
                </p>
                <p>
                    A little about me, I'm quietly confident, naturally curious, and I look for opportunities to 
                    grow as a SWE and make others near me better developers.
                </p>
            </div>
        </div>
    )
}