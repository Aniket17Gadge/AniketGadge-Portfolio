import { useActionData } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'

import { React } from 'react';

import Cards2 from './Cards2';







const Projects = () => {




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


    const ProjectImg = useRef()

    return (
        <div>
          
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            StrArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15} />
                    </h1>

                </div>
              
                <Cards2/>
                </div>
                <Loader type="pacman" />  

           
        </div >



    )


}

export default Projects

