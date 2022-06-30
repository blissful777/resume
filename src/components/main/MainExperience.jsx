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
                    <p className='main__experience_item-data'>Июль 2019</p>
                    <h3 className='main__experience_item-vacancy'>Freelance Designer<span><img className='main__experience_item-rectangle' src={logoItem} alt="company logo" /></span></h3>
                    <p className='main__experience_item-city'>Netherlands, Worldwide</p>
                    <p className='main__experience_item-duties'>Available for a project or job in UX/UI, Visual and Product design.</p>
                    <a className='main__experience_item-link' href="#">Commercial tryouts</a>
                    <a className='main__experience_item-link' href="#">Personal projects</a>
                </div>
                <div className="main__experience_item">
                    <p className='main__experience_item-data'>Январь 2017 - Сентябрь 2018</p>
                    <h3 className='main__experience_item-vacancy'>Digital Designer<span><img className='main__experience_item-rectangle' src={jcsGroup} alt="company logo" /></span></h3>
                    <p className='main__experience_item-city'><span><img className='main__experience_item-logo' src={jcs} alt="company logo" /></span><b>J Creative Solutions</b>Digital agency in Minsk, Belarus</p>
                    <p className='main__experience_item-duties'>Created visuals for digital marketing channels such as social media, promo web and online ads. Developed visual language from scratch or following the branding guidelines. Designed presentations
                        for clients and indoor purposes.</p>
                    <a className='main__experience_item-link' href="#">Agency projects</a>

                </div>
                <div className="main__experience_item">
                    <p className='main__experience_item-data'>Март 2014 - Февраль 2017</p>
                    <h3 className='main__experience_item-vacancy'>Content Specialist<span><img className='main__experience_item-rectangle' src={ozGroup} alt="company logo" /></span></h3>
                    <p className='main__experience_item-city'><span><img className='main__experience_item-logo' src={oz} alt="company logo" /></span><b>OZ.by</b>Online bookstore in Minsk, Belarus</p>
                    <p className='main__experience_item-duties'>Improved website performance and user experience of the biggest online bookstore OZ in Belarus, being a part of the marketing team,
                        I interpreted Google Analytics data to IT, content and marketing colleagues. Advised on tech and content optimization strategy, automated processes, provided reports, increased organic traffic up to 150%.</p>
                    <a className='main__experience_item-link' href="#">Annual company report 2016</a>
                </div>
                <div className="main__experience_item">
                    <p className='main__experience_item-data'>Август 2012 - Ноябрь 2013</p>
                    <h3 className='main__experience_item-vacancy'>Content Specialist<span><img className='main__experience_item-rectangle' src={vekGroup} alt="company logo" /></span></h3>
                    <p className='main__experience_item-city'><span><img className='main__experience_item-logo' src={vek} alt="company logo" /></span><b>21vek.by</b>E-commerce store in Minsk, Belarus</p>
                    <p className='main__experience_item-duties'>Available for a project or job in UX/UI, Visual and Product design.</p>
                    <a className='main__experience_item-link' href="#">Commercial tryouts</a>
                    <a className='main__experience_item-link' href="#">Personal projects</a>
                </div>
                <div className="main__experience_item">
                    <p className='main__experience_item-data'>Август 2011 - Ноябрь 2014</p>
                    <h3 className='main__experience_item-vacancy'>Software Support Engineer<span><img className='main__experience_item-rectangle' src={integralGroup} alt="company logo" /></span></h3>
                    <p className='main__experience_item-city'><span><img className='main__experience_item-logo' src={integral} alt="company logo" /></span><b>Integral</b>Microelectronics factory in Minsk, Belarus</p>
                    <p className='main__experience_item-duties'>Supported retail accounting system LS Trade, troubleshoot technical problems.</p>
                </div>
            </div>
  )
}
