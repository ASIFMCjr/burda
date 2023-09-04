import React from 'react'
import icolink from '../../assets/icons/link.png.png'
import './Contacts.css'
import { Form } from '../../nav'

const Contacts = () => {
  return (
    <div className='contacts'>
        <div className='contacts__left'>
            <div className='contacts__left-block'>
                <h2 className='contacts__left-block_b'>Свяжитесь с нами</h2>
                <p>ebogdashka03112005</p>
                <p>+7 989 (634) 82-91</p>
            </div>
            <div className='contacts__left-block'>
                <h2 className='contacts__left-block_b'>Mensa в соц. сетях</h2>
                <p><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Instagram<img alt='inst' src={icolink} /></a></p>
                <p><a href='https://www.google.com/search?q=react+%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D1%81%D0%B0%D0%B9%D1%82%D0%B0&biw=1172&bih=959&tbm=vid&sxsrf=AJOqlzX1wKvMgCiWhUM7kVo4grr9-qKLww%3A1675710079226&ei=f07hY-q-DaDixc8PkfmbiA4&oq=react+%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE&gs_lcp=Cg1nd3Mtd2l6LXZpZGVvEAEYATIFCCEQoAEyBQghEKABOgQIIxAnOgYIABAIEB46BwgjELACECdQ9wdYpx9gtCdoAHAAeACAAZABiAGiB5IBAzAuN5gBAKABAcABAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:ece80e19,vid:TfRFElId6WY'>WhatsApp<img alt='whats' src={icolink} /></a></p>
                <p><a href='https://jdbc.postgresql.org/documentation/use/'>Telegram<img alt='tg' src={icolink} /></a></p>
                <p><a href='https://vk.com/bogd1ck'>YouTube<img alt='yt' src={icolink} /></a></p>
            </div>
            <div className='contacts__left-block'>
                <Form classModal={'ylw-btn'}  nameModal={'Оставить заявку'}/>
            </div>
        </div>
        <div className='contacts__right'>
        <iframe className='gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.9131739585071!2d39.7047407742127!3d47.214950040122694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9a8f82b0a17%3A0xae4b6e608bcebd92!2sRostovskiy-Na-Donu%20Kolledzh%20Svyazi%20I%20Informatiki!5e0!3m2!1sen!2sru!4v1675937331067!5m2!1sen!2sru" allowfullscreen="" loading="lazy" title='g_map' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Contacts