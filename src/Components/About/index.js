import { useActionData } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faGitAlt, faHtml5, faJsSquare, faReact, faAngular, faPython, faJava } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

import { useCallback } from "react";

const About = () => {

 


    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(
        () => {
            const t = setTimeout(
                () => {
                    setLetterClass('text-animate-hover');
                },
                3000
            )
        }, []);
   
    return (
        <>



            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            StrArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I’m very ambitious Android & Web Developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>As a recent graduate holding a B.Sc. degree in Computer Science, I am highly motivated to pursue a career in
                        Android development and data science. Throughout my academic journey, I have obtained a comprehensive understanding
                        of computer science principles, software development, and data analysis. </p>
                    <p>I am a highly skilled and experienced developer with expertise in both Android and web development. Throughout my career,
                        I have successfully completed numerous projects in these domains, showcasing my strong technical abilities and problem-solving skills.
                        On the Android front, I have developed innovative and user-friendly applications, taking into consideration the latest design principles
                        and optimizing performance for a seamless user experience. In the realm of web development,
                        I have created dynamic and robust websites, utilizing cutting-edge technologies to ensure responsiveness and scalability. </p>
                </div>
                <div className='stage-cube-cont'>


                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color="#EC4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faJava} color="#319fff" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faAndroid} color="#00c939" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>

    )
}
export default About