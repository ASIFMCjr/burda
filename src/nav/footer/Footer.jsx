import React from 'react'
import './Footer.css'
import telegramico from '../../assets/icons/telegram.png'
import whatsappico from '../../assets/icons/whatsapp.png'
import logo from '../../assets/icons/logo.png'
import { Media } from '../header/Header'
import { useState, useEffect } from 'react';

const Footer = () => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])
  return (
    <div className='foot'>
        <div className='foot__up'>
            <div className='foot__up-first foot_up-part'>
            { screenSize.dynamicWidth > 700
            && ( <><div>
                    <img alt='logo' src={logo} />
                </div>
                <div>
                    <Media style={{margin: 'auto'}}/>
                </div></>
            )
            }
                
            </div>
            <div className='foot__up-second foot_up-part'>
                <b className='foot__up-part_b'>Продукт</b>
                <ul>
                    <li><a href='/' >Главная</a></li>
                    <li><a href='/devices'>Умные столы</a></li>
                    <li><a href='/projects'>Карьера</a></li>
                    <li><a href='/contacts'>Мебель для дома</a></li>
                </ul>
            </div>
            <div className='foot__up-third foot_up-part'>
                <b className='foot__up-part_b'>Компания</b>
                <ul className='foot__up-part_ul'>
                    <li ><a href='/'>Главная</a></li>
                    <li><a href='/contacts'>Контакты</a></li>
                    <li><a href='/projects'>Проекты</a></li>
                </ul>
            </div>
            <div className='foot__up-fourth foot_up-part'>
                <b className='foot__up-part_b'>Контакты</b>
                <ul className='foot__up-part_contacts'>
                    <li >+7 989 (634) 82-91</li>
                    <li>ebogdashka03112005@mail.ru</li>
                    <li><img alt='tg' src={telegramico} /><img alt='whats' src={whatsappico} /></li>
                </ul>
            </div>
        </div>
        <div className='foot__down'>
            <p className='foot__down-text'>© Mensa Design LLC, 2023. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer