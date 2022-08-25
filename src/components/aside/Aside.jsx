import React from 'react'
import '../aside/Aside.css'
import bigLineDown from '../image/bigLineDown.png'

export default function Aside() {
    return (
        <div id='aside'>
            <img className='aside_big-line-down' src={bigLineDown} alt="big line"/>
            <h2 className='aside_title'>Навыки</h2>
            <div className='aside__info'>
                {/* <div className='aside__item'>
                    <h4 className='aside__item_title'>Adobe Creative Suite</h4>
                    <p className='aside__item_text'>Photoshop, Illustrator, InDesign, XD, After Effects</p>
                </div> */}
                <div className='aside__item'>
                    <h4 className='aside__item_title'>Prototyping</h4>
                    <p className='aside__item_text'>Figma</p>
                </div>
                <div className='aside__item'>
                    <h4 className='aside__item_title'>Additional</h4>
                    <p className='aside__item_text'>HTML, CSS, BEM, Sass, JS ES6+, React, Redux, Rest API, Git, Bootstrap, Ant Design </p>
                </div>
                <div className='aside__item'>
                    <h4 className='aside__item_title'>Languages</h4>
                    <p className='aside__item_text'>Pre-intermediate English and Native Russian</p>
                </div>
            </div>
        </div>
    )
}
