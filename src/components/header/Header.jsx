import React from 'react'
import '../header/Header.css'
import Burger from '../burger/Burger.jsx'
import logo from '../image/Logo.png'
import fb from '../image/fb.png'
import tg from '../image/tg.png'
import vk from '../image/vk.png'
import headerLine from '../image/Active.png'
import { useState } from 'react'

export default function Header() {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        { value: 'Резюме', href: 'https://hh.ru/resume/97c6b119ff08e44f190039ed1f793676436d48' },
        { value: 'О себе', href: '#main' },
        { value: 'Навыки', href: '#aside' },
    ]
    return (
        <div className='header'>
            <div className="header__about">
                <img className='header__about_logo' src={logo} alt="logo" />
                <h1 className="header__about_name">Адуйский Олег,<br />Frontend разработчик</h1>
                <p className="header__about_text">Как разработчик, я высоко ценю способность воплотить видение дизайнера в жизнь,
                    что считаю очень полезным для бизнеса. Я получаю огромное удовлетворение,
                    наблюдая за работой от идеи до дизайна, особенно когда она появляется в руках пользователя.
                    Я считаю, что ориентированные на пользователя решения являются наиболее ценными цифровыми ресурсами будущего.</p>
            </div>
            <div className="header__info">
                <div className="header__info_list">
                    <img className='header__line' src={headerLine} alt="line" />
                    <a href='https://hh.ru/resume/97c6b119ff08e44f190039ed1f793676436d48' className="header__info_list-item" target="_blank">Резюме</a>
                    <a href='#main' className="header__info_list-item">О себе</a>
                    <a href='#aside' className="header__info_list-item">Навыки</a>
                </div>
                <div className="header__info_social">
                    <ul className='header__info_social_list'>
                        <li className='header__info_social_item'><a className='header__info_social_item-link' href='https://mail.google.com/mail/u/0/#inbox'>molotov.coctail777@gmail.com</a></li>
                        <li className='header__info_social_item'><a className='header__info_social_item-link' href='tel:89773999006'>+7 (977) 399 90 06</a></li>
                        <li className='header__info_social_item'><a className='header__info_social_item-link' href='https://yandex.ru/maps/213/moscow/?ll=37.622504%2C55.753215&z=10'>г.Москва</a></li>
                    </ul>
                    <div className="header__info_social-image">
                        <a className='header__info_social-image-link' href="https://www.facebook.com/"><img src={fb} alt='facebook'></img></a>
                        <a className='header__info_social-image-link' href="https://t.me/OlegAduiskii"><img src={tg} alt='telegram'></img></a>
                        <a className='header__info_social-image-link' href="https://vk.com/olezhka7773"><img src={vk} alt='vkontakte'></img></a>
                    </div>
                </div>
            </div>
            <div className='burger' onClick={() => setMenuActive(!menuActive)}>
                <span className='burger__item'></span>
            </div>
            <Burger active={menuActive} setActive={setMenuActive} items={items} />


        </div>
    )
}
