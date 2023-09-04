import React from 'react'
import './Header.css'
import logo from '../../assets/icons/logo.png'
import yt from '../../assets/icons/yt.png'
import react from '../../assets/icons/react.png'
import jdbc from '../../assets/icons/jdbc.png'
import vk from '../../assets/icons/vk.png'
import { useState, useEffect } from 'react';
import { Form } from '../../nav'

export const Media = () => (
    <>
    <div className='head__up-media'>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src={yt} alt='yt'/></a>
        <a href='https://www.google.com/search?q=react+%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D1%81%D0%B0%D0%B9%D1%82%D0%B0&biw=1172&bih=959&tbm=vid&sxsrf=AJOqlzX1wKvMgCiWhUM7kVo4grr9-qKLww%3A1675710079226&ei=f07hY-q-DaDixc8PkfmbiA4&oq=react+%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE&gs_lcp=Cg1nd3Mtd2l6LXZpZGVvEAEYATIFCCEQoAEyBQghEKABOgQIIxAnOgYIABAIEB46BwgjELACECdQ9wdYpx9gtCdoAHAAeACAAZABiAGiB5IBAzAuN5gBAKABAcABAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:ece80e19,vid:TfRFElId6WY'><img src={react} alt='react'/></a>
        <a href='https://jdbc.postgresql.org/documentation/use/'><img src={jdbc} alt='jdbc'/></a>
        <a href='https://vk.com/bogd1ck'><img src={vk} alt='vk'/></a>
    </div>
    </>
)

const NavLinks = () => (
    <>        
        <a href='/' className='head__down-link'>Главная</a>
        <a href='/projects' className='head__down-link'>Наши проекты</a>
        <a href='/devices' className='head__down-link'>Девайсы</a>
        <a href='/contacts' className='head__down-link'>Контакты</a>
    </>
)


const Header = () => {

    // window size

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
    <div className='head'>
        <div className='head__up'>
        { screenSize.dynamicWidth > 700
            && <Media/>
        }
            <div className='head__up-logo'><img src={logo} alt='logo'/></div>
            <div className='head__up-contacts'>
                <Form classModal={'head__up-contacts_zayavka btn'} nameModal={'Оставить заявку'}/>
            </div>
        </div>
        <div className='head__down'>
            <NavLinks />
        </div>
    </div>
  )
}

export default Header