import React from 'react'
import '../main/Main.css'
import MainExperience from './MainExperience'
import MainEducation from './MainEducation'
import flyMan from '../image/image 8.png'
import bigLineUpper from '../image/bigLineUpper.png'
import bigLineUpperAdaptive from '../image/bigLineUpAdaptive.png'

export default function Main() {
    return (
        <div id='main'>
            <img className='main__big-line-upper' src={bigLineUpper} alt="big line" />
            <img className='main__big-line-upper-adaptive' src={bigLineUpperAdaptive} alt="big line" />
            <MainExperience />
            <div className="main__fly-man">
                <img className='main__fly-man_img' src={flyMan} alt="fly man" />
            </div>
            <MainEducation />
        </div>
    )
}
