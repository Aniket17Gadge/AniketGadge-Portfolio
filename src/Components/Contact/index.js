import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'








const Contact = () => {
   
     



function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    e.target.btn.innerHTML = "Sending......";
    fetch(
        "https://script.google.com/macros/s/AKfycbxJ_1faYkgx6qNqG8JJsMzrLZdXyyT9fVnphlEEkHQFVOmNQmcImSPVGB1wCLLfVnSGsw/exec",
        {
            method: "POST",
            body: formDatab
        }
    )
        .then((res) => res.text())
        .then((finalRes) => {
            e.target.btn.innerHTML = "SEND";
            document.getElementById("res").innerHTML = finalRes;
            formEle.reset();
            setTimeout(() => {
                document.getElementById("res").innerHTML = '';
            }, 5000)

        })







        .catch((error) => {
            console.log(error);
        });
    e.preventDefault();
}


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
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        StrArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                I am currently seeking job opportunities in the fields of software development and data science. With a strong background in computer science and a passion for coding, I am eager to contribute my skills and expertise to innovative projects in these areas. Additionally, I am also open to freelancing opportunities to further expand my experience and broaden my network. If you have any relevant opportunities in either freelancing or full-time positions, I would appreciate it if you could reach out to me. I am confident in my ability to deliver high-quality work and make valuable contributions to any team or project.
                </p>
                <div className="contact-form">


                    <form id='form' onSubmit={(e) => Submit(e)}>
                        <div id='res' className='res' ></div>
                        <br /> 
                        <ul>
                            
                               
                           
                            <li className="half">
                                <input placeholder="Name" type="text" name="Name" id='Name' required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="Email"
                                    id='Email'
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="Subject"
                                    id='Subject'
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="Message"
                                    id='Message'
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <button type="submit" name='btn' className='flat-button'>SEND</button>
                            </li>
                        </ul>
                    </form>
                </div>



            </div>

        </div>

        <Loader type="pacman" />

    </>


)



}

export default Contact