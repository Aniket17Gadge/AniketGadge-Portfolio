import { useActionData } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import TagCloud from 'TagCloud'

import { useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faCloudflare, faCss3, faFigma, faHtml5, faJava, faJs, faPython, faReact, } from '@fortawesome/free-brands-svg-icons'
import { faCogs, faWindowRestore, fasq } from '@fortawesome/free-solid-svg-icons'
import pdf from '../pdf/ResumeAniket.pdf'
const Skills = () => {
   
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
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "ReactJs",
                "JavaScript",
                "Java",
                "Python",
                "Android",
                "Rest API",
                "UI/UX",
                "SQL",
                "PL/SQL",
                "Numpy",
                "Pandas",
                "Matplotlib",
                "Power BI",
                "GITHUB",
            ];

            const options = {
                radius: 300,
                maxSpeed: "high",
                initSpeed: "high",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);
  

    return (
        <>
           
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            StrArray={['S', 'k', 'i', 'l', 'l', 's', '', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15} />
                    </h1>
                    <p>Android Developer with strong background applying knowledge to support development projects. Successful at
                        using Java programming language to create quality work And Also Worked As Data Analyst On Power Bi to
                        Analyze The Data and help to make Decision on the Basis of Data.  </p>
                    <p>I possess a comprehensive set of skills and extensive knowledge in various programming languages and technologies.
                        With expertise in  <span class="tech-tag">HTML5</span>,<span class="tech-tag">CSS</span>,<span class="tech-tag">Reactjs</span>,<span class="tech-tag">JavaScript</span>,<span class="tech-tag">Java</span>,
                        <span class="tech-tag">Python</span>,
                        <span class="tech-tag">Android</span>,
                        <span class="tech-tag">Rest API</span>,
                        <span class="tech-tag">UI/UX</span>,
                        <span class="tech-tag">SQL</span>,
                        <span class="tech-tag">PL/SQL</span>,
                        <span class="tech-tag">Numpy</span>,
                        <span class="tech-tag">Pandas</span>,
                        <span class="tech-tag">Matplotlib</span>,
                        <span class="tech-tag">Power BI</span> and
                        <span class="tech-tag">GITHUB</span>, I have successfully developed numerous projects showcasing my proficiency. My understanding of these technologies enables me to create dynamic and interactive web applications,
                        effectively handle data manipulation and analysis, and develop robust mobile applications.
                        Through my experience and strong command over these tools,
                        I have been able to deliver exceptional results and contribute to the success of various projects.</p>
                        <p>
            Visit my &nbsp;
              <a onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked', 'eventLabel': 'Linkedin profile' });" target="_blank" href="https://www.linkedin.com/in/aniket-gadge-3b146b235/"><span class="tech-tag">LinkedIn</span></a> &nbsp; profile for more details. Also you can checkout my cv on this
              &nbsp;<a target="_blank" href={pdf}>  <span class="tech-tag">My CV</span></a>.
          </p>
                </div>
                <div className='canvas'>
                    <div className="text-shpere">
                        {/* span tag className must be "tagcloud"  */}
                        <span className="tagcloud"></span>
                    </div>
                </div>
                <div className='skills'>
                    <div className='skills-container'>
                        <label class="skills-section-title">Languages</label>
                        <br />
                        <div className='Languages'>

                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faJava} color="yellow" /></div>
                                <label class="skill-name">Java</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faPython} color="yellow" /></div>
                                <label class="skill-name">Python</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faJs} color="yellow" /></div>
                                <label class="skill-name">JavaScript</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faHtml5} color="yellow" /></div>
                                <label class="skill-name">HTML</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faCss3} color="yellow" /></div>
                                <label class="skill-name">CSS</label>
                            </div>
                        </div>
                        <br />
                        <label class="skills-section-title">Frameworks</label>
                        <br />
                        <div className='Languages'>

                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faReact} color="yellow" /></div>
                                <label class="skill-name">React</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faJava} color="yellow" /></div>
                                <label class="skill-name">JSP</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faCogs} color="yellow" /></div>
                                <label class="skill-name">RestAPI</label>
                            </div>

                        </div>
                        <label class="skills-section-title">Databases</label>
                        <br />
                        <div className='Languages'>

                            <div className='skill-card'>
                                <div className='skill-icon'><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path></svg>  </div>
                                <label class="skill-name">SQL</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'> <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z"></path></svg></div>
                                <label class="skill-name">PL/SQL</label>
                            </div>


                        </div>
                        <label class="skills-section-title">Development</label>
                        <br />
                        <div className='Languages'>

                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faAndroid} color="yellow" /></div>
                                <label class="skill-name">Android</label>
                            </div>
                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faWindowRestore} color="yellow" /></div>
                                <label class="skill-name">Web App</label>
                            </div>


                        </div>
                        <label class="skills-section-title">UI/UX</label>
                        <br />
                        <div className='Languages'>

                            <div className='skill-card'>
                                <div className='skill-icon'>  <FontAwesomeIcon icon={faFigma} color="yellow" /></div>
                                <label class="skill-name">Figma</label>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>

    )

}

export default Skills