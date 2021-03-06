import React from 'react';
import '../burger/Burger.css';
import processing from '../image/processing.png'

export default function Burger({ items, active, setActive }) {
    return (
        <div className={active ? 'burger-menu active' : 'burger-menu'} onClick={() => setActive(false)}>
            <div className="blur" />
            <div className="burger-menu__content" onClick={e => e.stopPropagation()}>
                <ul>
                    {items.map(item =>
                        <li>
                            <a 
                            onClick={() => setActive(false)}
                            href={item.href} >{item.value}
                            </a>
                        </li>
                    )}
                </ul>
                <div className='burger-menu__image'>
                <img src={processing} alt="processing" />
                </div>
                
            </div>
        </div>
    )
}