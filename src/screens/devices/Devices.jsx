import React from 'react'
import './Devices.css'
import backgroundDevices from '../../assets/screens/devices/background.png'
import block1 from '../../assets/screens/devices/blocks/1.png'
import block2 from '../../assets/screens/devices/blocks/2.png'
import block3 from '../../assets/screens/devices/blocks/3.png'
import block4 from '../../assets/screens/devices/blocks/4.png'
import block5 from '../../assets/screens/devices/blocks/5.png'
import block6 from '../../assets/screens/devices/blocks/6.png'
import { Form } from '../../nav'

export const DevicesBlock = ({ img, text }) => (
  <>
    <div className='devices__block'>
      <div className='devices__block-text block__info'>
        <h2>{text}</h2>
      </div>
      <div className='devices__block-pic block__info'>
        <img alt='pic' src={img} style={{width: '100%'}}/>
      </div>
    </div>
  </>
)

export const DevicesInvertBlock = ({ img, text }) => (
  <>
    <div className='devices__block'>
      <div className='devices__block-pic block__info'>
        <img alt='pic' src={img} style={{width: '100%'}}/>
      </div>
      <div className='devices__block-text block__info'>
        <h2>{text}</h2>
      </div>
    </div>
  </>
)

export const DevicesBlocks = () => (
  <>
    <div className='devices__blocks'>
      <DevicesBlock img={block1} text={'Беспроводная зарядка'}/>
      <DevicesInvertBlock img={block2} text={'USB Type-C зарядный блок'} />
      <DevicesBlock img={block3} text={'USB Type-C HUB'} />
      <DevicesInvertBlock img={block4} text={'Яндекс Станция Мини'} />
      <DevicesBlock img={block5} text={'Электро- регулируемые опоры'} />
      <DevicesInvertBlock img={block6} text={'Беспроводная зарядка Apple Watch'} />
    </div>
  </>
)

const Devices = () => {
  return (
    <div className='devices'>
      <div className='home__first'>
            <div className='home__first-up' style={{height: '100vh', width: '100%',
                                            backgroundImage: `url(${backgroundDevices})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: 'no-repeat',
                                            backgroundAttachment: 'scroll',
                                            backgroundPosition: 'center',
                                            marginTop: '-22px'}}>
                <div className='home__first-up_text'>
                        <h1>Устройства и фичи, которые упростят вашу жизнь</h1>
                        <p>Мы встраиваем в наши умные столы более 20-ти разных приспособлений, электронных девайсов и других устройств, которые экономят ваше время</p>
                        <Form classModal={'order-btn'}  nameModal={'Заказать просчёт'}/>
                    
                </div>
            </div>
            
      </div>
      <DevicesBlocks />
    </div>
  )
}

export default Devices