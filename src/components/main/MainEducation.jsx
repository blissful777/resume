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
                <h3 className='main__education_item-city'>Frontend Developer</h3>
                <p className='main__education_item-duties'>Yandex, 2022</p>
            </div>
            <div className="main__education_item">
                <span><img className='main__eeducation_item-rectangle' src={educTwo} alt="rectangle logo" /></span>
                <h3 className='main__education_item-city'>Frontend Developer</h3>
                <p className='main__education_item-duties'>Algoritmika, Oct 2021</p>
            </div>
            </div>
            </div>
            
            
        </div>
    )
}
