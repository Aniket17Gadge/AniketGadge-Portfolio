import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'


import 'swiper/css';
import 'swiper/css/navigation';

import './styles2.scss';
import Project1 from './Media/Project1.jpg'
import Project2 from './Media/Project2.jpg'
import Project3 from './Media/Project3.jpg'
import Project4 from './Media/Project4.jpg'
import Project5 from './Media/Project5.jpg'
import Project6 from './Media/Project6.jpg'


import { Navigation } from 'swiper/modules';

export default function Cards2() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className='card1'>
          <img src={Project1} alt='Project1' />
          <br />
          <h3>Fleet Management Website</h3>
          <p>
            Fleet Management Website is to maintain an accurate and up-to-date overview of vehicle diagnostics, geolocation, and identifying risky or unsafe driver behaviors while simultaneously reducing manager workload.& Maintain All Fleet Work It is Easy to Handle and Manage ,User Friendly
          </p>
          <br />
          <div className='language'>
           
            <button className="flat-button">Jsp</button>&nbsp;
            <button className="flat-button">PL/Sql</button>&nbsp;
            <button className="flat-button">HTML</button>&nbsp;
            <button className="flat-button">Css</button><br/>
          
          </div>
          <br/>
          <button className="button" > <a target="_blank" rel='noreferrer' href='https://github.com/Aniket17Gadge/Fleet-Management-Website.git'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"   className="anchor-icon" />&nbsp;&nbsp;GitHub
                    </a></button>
         
                   
        </div></SwiperSlide>
        <SwiperSlide> <div className='card1'>

          <img src={Project2} alt='Project1' />
          <br />
          <h3>Employee Attrition & Performance Analysis</h3>
          <br />
          <div className='para' >
            The project's main objective is to analyze employee data from different sources, such as HR files, performance
            reviews, and employee surveys. The analysis looks at things like attrition rates, job satisfaction, and employee
            demographics. I Worked On Employee Attrition Data set and Finding the Insights of it. and Also Visualized the
            Data in Power BI to understand the Insights and Make Quick Decisions From It.
          </div>
          <br />
          <div className='language'>
            <button className="flat-button">Power BI</button>&nbsp;
            <button className="flat-button">DataSet</button>&nbsp;
            <button className="button" > <a target="_blank" rel='noreferrer' href='https://github.com/Aniket17Gadge/Employee-Attrition-Performance-Analysis.git'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"   className="anchor-icon" />&nbsp;&nbsp;GitHub
                    </a></button>
                    
          </div>
         
         
        </div></SwiperSlide>
        <SwiperSlide><div className='card1'>
          <img src={Project3} alt='Project1' />
          <br />
          <h3>Amazon Merchandise Sales POWER BI Dashboard</h3>
          <br />
          <div className='para'>Created Interactive Dashboard To Track And Analyze Online Sales Data.Used Complex Parameters To Drill
            Down The Worksheet And Customization Using Filter And Slicers. Created Connections, Join New
            Tables,Calculations,To Manipulate Data And Enable User Driven Parameters For Visualizations.Used Different
            Types Of Chart For Visualization.
          </div>        <br />
          <div className='language'>
            <button className="flat-button">Power BI</button>&nbsp;
            <button className="flat-button">DataSet</button>&nbsp;
            <button className="button" > <a target="_blank" rel='noreferrer' href='https://github.com/Aniket17Gadge/Amazon-Merchandise-Sales-POWER-BI-Dashboard.git'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"   className="anchor-icon" />&nbsp;&nbsp;GitHub
                    </a></button>
          </div>
        
        </div></SwiperSlide>
        <SwiperSlide><div className='card1'>
          <img src={Project4} alt='Project1' />
          <br />
          <h3>Gold Price Prediction Using ML Model(Random Forest Regression)</h3>
          <br />
          <div className='para'>
            In this project would forecast gold rates using the most comprehensive set of features and would apply various
            machine learning algorithms for forecasting and compare their results. We also identify the attributes that highly
            influence the gold rates. Forecasting rise and fall in the daily gold rates, can help investors to decide when to buy
            (or sell) the commodity.
          </div>
          <br />
          <div className='language'>
            <button className="flat-button">Python</button>&nbsp;
            <button className="flat-button">Numpy</button>&nbsp;
            <button className="flat-button">Pandas</button>&nbsp;
            <button className="flat-button">Matplotlib</button>&nbsp;
          
            
          </div>
          <br/>  <button className="button" > <a target="_blank" rel='noreferrer' href='https://github.com/Aniket17Gadge/Gold-Price-Prediction-Using-ML-Model-Random-Forest-Regression-.git'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"   className="anchor-icon" />&nbsp;&nbsp;GitHub
                    </a></button>
        </div></SwiperSlide>
        <SwiperSlide><div className='card1'>
          <img src={Project5} alt='Project1' />
          <br />
          <h3>Flipkart Mobile Selling Data Analysis & Visualization</h3>
          <br />
          <div className='para'>In This Project We Use python and Google Colab Platform for Data cleaning and Mining and
            analyzing the data and perform various EDA Operations on Dataset and by this we make
            predictions and use for the business purpose.
          </div>        <br />
          <div className='language'>
            <button className="flat-button">Python</button>&nbsp;
            <button className="flat-button">Numpy</button>&nbsp;
            <button className="flat-button">Pandas</button>&nbsp;
            <button className="flat-button">Seaborn</button>&nbsp;
           
          </div><br/> <button className="button" > <a target="_blank" rel='noreferrer' href='https://github.com/Aniket17Gadge/Flipkart-Mobile-Selling-Data-Analysis-Visualization.git'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"   className="anchor-icon" />&nbsp;&nbsp;GitHub
                    </a></button>
        </div></SwiperSlide>
        <SwiperSlide><div className='card1'>
          <img src={Project6} alt='Project1' />
          <br />
          <h3>Library Management Android Application</h3>
          <br />
          <div className='para'>Library Management App is a tool for library management people. Using the app, the admin of the library can upload book details and where it is located and then if want then update it or delete
          </div>        <br />
          <div className='language'>
            <button className="flat-button">Java</button>&nbsp;
            <button className="flat-button">SqlLite</button>&nbsp;
            <button className="flat-button">XML</button>&nbsp;
            <button className="flat-button">SDK</button>&nbsp;
           
          </div><br/> <button className="button" > <a target="_blank" rel='noreferrer' href='https://github.com/Aniket17Gadge/Library-Management-Android-Application.git'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"   className="anchor-icon" />&nbsp;&nbsp;GitHub
                    </a></button>

        </div></SwiperSlide>
       
      </Swiper>
    </>
  );
}
