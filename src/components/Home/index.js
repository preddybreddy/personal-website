import './index.scss'
import Logo_p from '../../assets/images/icons8-letter-p-50.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    const nameArr = ['r', 'a', 'n', 'a', 'y']
    const jobTitleArr = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    
    useEffect(() => {
     setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1><span className={`${letterClass} _1`}>H</span>
                    <span className={`${letterClass} _2`}>i</span>
                    <span className={`${letterClass} _3`}>,</span>
                    <br/>
                    <span className={`${letterClass} _4`}>I</span>
                    <span className={`${letterClass} _5`}>'</span>
                    <span className={`${letterClass} _6`}>m</span>
                    <img src={Logo_p} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArr} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobTitleArr} idx={20} />
                </h1>
                <h2>Full-stack developer / Software Architect</h2>
            </div>
        </div>
    )   
}