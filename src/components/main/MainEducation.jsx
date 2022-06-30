import React from 'react'
import '../main/Main.css'
import educOne from '../image/educOne.png'
import educTwo from '../image/educTwo.png'
import educThree from '../image/educThree.png'
import educFour from '../image/educFour.png'
import educFive from '../image/educFive.png'
import educSix from '../image/educSix.png'

export default function MainEducation() {
    return (
        <div className="main__education">
            <h2>Образование</h2>
            <div className='main__education_adaptive'>
            <div>
            <div className="main__education_item">
                <span><img className='main__eeducation_item-rectangle' src={educOne} alt="rectangle logo" /></span>
                <h3 className='main__education_item-city'>Interface Design:<br />Web & Mobile</h3>
                <p className='main__education_item-duties'>IT-Academy, 2020</p>
            </div>
            <div className="main__education_item">
                <span><img className='main__eeducation_item-rectangle' src={educTwo} alt="rectangle logo" /></span>
                <h3 className='main__education_item-city'>Fundamentals of Usability</h3>
                <p className='main__education_item-duties'>Skillshare, Oct 2018</p>
            </div>
            <div className="main__education_item">
                <span><img className='main__eeducation_item-rectangle' src={educThree} alt="rectangle logo" /></span>
                <h3 className='main__education_item-city'>CG Artist</h3>
                <p className='main__education_item-duties'>Polygon CG School, May-Sep 2017</p>
            </div>
            </div>
            
            <div className='main__education_adaptive-item'>
            <div className="main__education_item">
                <span><img className='main__eeducation_item-rectangle' src={educFour} alt="rectangle logo" /></span>
                <h3 className='main__education_item-city'>Graphic Design</h3>
                <p className='main__education_item-duties'>Belarusian State Academy of Arts, 2015 - 2017 Postgraduate Diploma</p>
            </div>
            <div className="main__education_item">
                <span><img className='main__eeducation_item-rectangle' src={educFive} alt="rectangle logo" /></span>
                <h3 className='main__education_item-city'>SEO Specialist</h3>
                <p className='main__education_item-duties'>ARTOX Media, Jun-Aug 2012</p>
            </div>
            <div className="main__education_item">
                <span><img className='main__eeducation_item-rectangle' src={educSix} alt="rectangle logo" /></span>
                <h3 className='main__education_item-city'>Information Technology Software</h3>
                <p className='main__education_item-duties'>Belarusian State University of Informatics and Radioelectronics, 2011 - 2015 Bachelor’s degree</p>
                <p className='main__education_item-duties'>Polotsk State Economic College, 2007 - 2011 Associate’s degree</p>
            </div>
            </div>
            </div>
            
            
        </div>
    )
}
