import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logoa.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import pdf from '../pdf/ResumeAniket.pdf'

import { useCallback } from "react";


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['n', 'i', 'k', 'e', 't', ' ', 'G', 'a', 'd', 'g', 'e']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e ',' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    useEffect(
        () => {
            const t = setTimeout(
                () => {
                    setLetterClass('text-animate-hover');
                },
                4000
            )
        }, []);
    


   
   


    return (
        <div className="container home-pag">
        

            <div className="text-Zone">
                <h1><span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>

                    <span className={`${letterClass} _14`}>'m</span>

                    <img src={LogoS} alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        StrArray={nameArray}
                        idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        StrArray={jobArray}
                        idx={22} /></h1>
                <h2>
                    Android Developer | Web Developer | Data Science | Machine Learning
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>&nbsp;
                <a href={pdf} target = "_blank"  className='flat-button'>ABOUT ME</a>



            </div>
            <Logo>

            </Logo>
            <Loader type="pacman" />
        </div>

    );
}

export default Home