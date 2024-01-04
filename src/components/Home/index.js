import './index.scss'
import Logo_p from '../../assets/images/icons8-letter-p-50.png'
export default function Home() {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm
                    <img src={Logo_p} alt="developer" />
                    ranay
                    <br />
                    Software Developer
                </h1>
                <h2>Full-stack developer / Software Architect</h2>
            </div>
        </div>
    )   
}