import './index.scss'
import Logo_p from '../../assets/images/icons8-letter-p-50.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

export default function Home() {
    function addAnimationDelay() {
        let startTime = 0.5
        const arr = document.querySelectorAll('.text-animate')
        for (let i=0; i < arr.length; i++) {
          //  console.log(i)
            startTime += 0.1
            arr[i].style["animation-delay"] = startTime+'s'
        }
    }
    function removeAnimationDelay() {
        const arr = document.querySelectorAll('.text-animate-hover')
        console.log(arr)
        for (let i=0; i < arr.length; i++) {
            console.log(i)
            arr[i].style["animation-delay"] = '0s'
        }
    }
    const [letterClass, setLetterClass] = useState('text-animate')
    
    const nameArr = ['r', 'a', 'n', 'a', 'y']
    const jobTitleArr = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    

    useEffect(() => {
        setTimeout(() => addAnimationDelay(), 1000)
    }, [])

    useEffect(() => {
        setTimeout(() => setLetterClass('text-animate-hover'), 4000)
    }, [])

    useEffect(() => {
        setTimeout(() => removeAnimationDelay(), 4100)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1><span className={`${letterClass}`}>H</span>
                        <span className={`${letterClass}`}>i</span>
                        <span className={`${letterClass}`}>,</span>
                        <br />
                        <span className={`${letterClass}`}>I</span>
                        <span className={`${letterClass}`}>'</span>
                        <span className={`${letterClass}`}>m</span>
                        <img src={Logo_p} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArr} idx={7} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobTitleArr} idx={12} />
                    </h1>
                    <h2>Full-stack developer / Software Architect</h2>
                </div>
            </div>
            {/* <Loader type="pacman"/> */}
        </>
    )       
}