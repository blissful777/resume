import React from 'react'
import '../main/Main.css'
import logoItem from '../image/Group 10.png'
import jcs from '../image/jcs.png'
import vek from '../image/21vek.png'
import oz from '../image/oz.png'
import integral from '../image/integral.png'
import jcsGroup from '../image/jcsGroup.png'
import ozGroup from '../image/ozGroup.png'
import vekGroup from '../image/21vekGroup.png'
import integralGroup from '../image/integralGroup.png'
export default function MainExperience() {
  return (
    <div className="main__experience">
                <h2 className='main__experience_title'>Опыт работы</h2>
                <div className="main__experience_item">
                <p className='main__experience_item-data'>Май 2022 - Август 2022</p>
                    <h3 className='main__experience_item-vacancy'>SoftBox<span><img className='main__experience_item-rectangle' src={logoItem} alt="company logo" /></span></h3>
                    <p className='main__experience_item-city'>Russia, Moscow</p>
                    <p className='main__experience_item-duties'>Available for a project or job in UX/UI, Visual and Product design.</p>
                </div>
                <div className="main__experience_item">
                    <p className='main__experience_item-data'>Май 2021 - Февраль 2022</p>
                    <h3 className='main__experience_item-vacancy'>Algoritmika<span><img className='main__experience_item-rectangle' src={logoItem} alt="company logo" /></span></h3>
                    <p className='main__experience_item-city'>Russia, Moscow</p>
                    <p className='main__experience_item-duties'>Available for a project or job in UX/UI, Visual and Product design.</p>
                </div>
            </div>
  )
}
