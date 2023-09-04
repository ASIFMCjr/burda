import React from 'react'
import './Home_first.css'
import './Home_second.css'
import './Home_third.css'
import './Home_fourth.css'
import backgroundHome from '../../assets/screens/home/first.png'
import desk1 from "../../assets/screens/home/second/1.png"
import desk2 from "../../assets/screens/home/second/2.png"
import desk3 from "../../assets/screens/home/second/3.png"
import ico01 from "../../assets/screens/home/second/circle_01.png"
import ico02 from "../../assets/screens/home/second/circle_02.png"
import ico03 from "../../assets/screens/home/second/circle_03.png"
import devices from '../../assets/screens/home/third/Devices.png'
import devicesLeft from '../../assets/screens/home/third/left.png'
import devicesRight from '../../assets/screens/home/third/right.png'
import table from '../../assets/screens/home/fourth/table.png'
import charge from '../../assets/screens/home/fourth/charge.png'
import circle from '../../assets/screens/home/third/main-circle.png.png'
import response from '../../assets/screens/home/fourth/response.png'
import { Form } from '../../nav'

const Home = () => {
  return (
    <div className='home'>
        <div className='home__first'>
            <div className='home__first-up' style={{height: '100vh', width: '100%',
                                            backgroundImage: `url(${backgroundHome})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: 'no-repeat',
                                            backgroundAttachment: 'scroll',
                                            backgroundPosition: 'center',
                                            marginTop: '-22px'}}>
                <div className='home__first-up_text'>
                        <h1>Умные столы<br/> Mensa Design</h1>
                        <p>Производство умной мебели со<br/> встроенной электроникой на заказ</p>
                        <Form classModal={'order-btn'} nameModal={'Заказать просчёт'}/>
                </div>
            </div>
            
        </div>
        <div className='home__second'>
            <div className='home__second-header'>
                <p style={{color: '#FECB06'}}>Встречай свой умный стол Mensa Design</p>
                <h2 style={{color: '#FECB06'}}>Эргономичные Smart столы для продуктивной работы</h2>
                <a href='/projects'><button className='head__up-contacts_zayavka btn'>Все модели</button></a>
            </div>
            <div className='home__second-example'>
                <div className='home__second-example_block'>
                    <div className='second__example-img'>
                        <img src={desk1} alt="1" style={{width: '100%'}}/>
                    </div>
                    <div className='second__example-text'>
                        <h2>Стол на двоих с кулерами Lament</h2>
                        <p>Стол с беспроводной зарядкой, блоком USB, кабель-менеджментом, подсветкой и отделами для хранения</p>
                    </div>
                    <div className='second__example-btn'>
                        <a href='projects'><button className='more-info-btn'>Узнать больше</button></a>
                    </div>
                </div>
                <div className='home__second-example_block'>
                    <div className='second__example-img'>
                        <img src={desk2} alt="2" style={{width: '100%'}} />
                    </div>
                    <div className='second__example-text'>
                        <h2>Умная рабочая станция Monolith</h2>
                        <p>Позволяет работать на 3х устройствах одновременно, с голосовым помощником и Hi-Fi звучанием</p>
                    </div>
                    <div className='second__example-btn'>
                        <a href='projects'><button className='more-info-btn'>Узнать больше</button></a>
                    </div>
                </div>
                <div className='home__second-example_block'>
                    <div className='second__example-img'>
                        <img src={desk3} alt="3" style={{width: '100%'}} />
                    </div>
                    <div className='second__example-text'>
                        <h2>Умный стол Voyager с охлаждением ноутбука</h2>
                        <p>Стол с охлаждением для ноутбука, беспроводной зарядкой для iWatch, электрорегулируемым подстольем</p>
                    </div>
                    <div className='second__example-btn'>
                        <a href='projects'><button className='more-info-btn'>Узнать больше</button></a>
                    </div>
                </div>
            </div>
            <div className='home__second-plan'>
                <h1 style={{color: '#FECB06', marginBottom: '75px'}}>Как заказать стол своей мечты?</h1>
                <div className='second__plan'>
                    <div className='second__plan-block'>
                        <img src={ico01} alt='idea'/>
                        <h4>Идея</h4>
                        <p>Наш менеджер узнает все нюансы, необходимые для создания идеального стола, а также предложит девайсы, которые будут помогать в работе, и добавлять комфорт в повседневные процессы</p>
                    </div>
                    <div className='second__plan-block'>
                        <img src={ico02} alt='visualisation'/>
                        <h4>Визуализация</h4>
                        <p>Мы подготовим 3D визуализацию и спецификацию проекта с подробным описанием. Совместно внесем необходимые правки в макет, добавим новые идеи.</p>
                    </div>
                    <div className='second__plan-block'>
                        <img src={ico03} alt='realization'/>
                        <h4>Реализация</h4>
                        <p>После утверждения проекта заказчик вносит предоплату 50% удобным способом. На этот бюджет команда Mensa Design закупает материалы и комплектующие, начинается производство умного стола вашей мечты!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='home__third'>
            <div style={{backgroundImage: `url(${devices})`, background: 'cover center', backgroundRepeat: 'no-repeat', width:'100%',height:'65vh'}}>
                <div className='home__first-up_text'>
                    <h1>Девайсы</h1>
                    <p>Ознакомьтесь с полным списком девайсов, которые мы уже встроили в наши проекты (но мы так же с удовольствием добавим и то, чего еще нет в этом списке!)</p>
                    <a href='/devices'><button className='order-btn'>Перейти к каталогу</button></a>
                </div>
                
            </div>
            <div className='home__third-blocks'>
                <div className='third_block' style={{backgroundImage: `url(${devicesLeft})`, background: 'cover center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width:'45%',height:'100%'}}>
                    <div className='third-block_inside'>
                        <img alt='learn more' src={circle} style={{width: '40%'}}/>
                        <h1>Ощути качество</h1>
                        <p>Мы понимаем, что не все захотят себе умные столы со стандартным набором функций, а также, кому-то не подойдут типовые размеры 120*60 см. Поэтому мы создаем предметы интерьера индивидуально под ваши запросы и желания</p>
                        <Form classModal={'third-btn'} nameModal={'Узнать больше'} />
                    </div>
                </div>
                <div className='third_block'  style={{backgroundImage: `url(${devicesRight})`, background: 'cover center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width:'45%',height:'100%'}}>
                    <div className='third-block_inside'>
                        <h1>Отзывы о наших столах</h1>
                        <img alt='feedback' src={response}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='home__fourth'>
            <div style={{backgroundImage: `url(${table})`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width:'100%',height:'100vh'}}>
                <div className='home__first-up_text' >
                    <h2>Мебель из дерева для дома</h2>
                    <p>Помимо умной мебели Mensa Design изготовливает высококачественную мебель для дома из дерева, например: Обеденные столы, журнальные столики, подставки на диван и любая другая мебель из дерева.</p>
                    <a href='/projects'><button className='order-btn'>Перейти к каталогу</button></a>
                </div>
                
            </div>
            <div className='home__fourth-blocks'>
                <div className='home__fourth-box' style={{backgroundImage: `url(${devicesLeft})`, background: 'cover center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <div className='fourth-block' style={{color: 'black'}}>
                        <h3>Youtube канал Mensa Design</h3>
                        <p>У нас есть Youtube канал на котором мы рассказываем про наши проекты, про умный дом и девайсы, которые можно внедрить в умные предметы интерьера, подписывайтесь!</p>
                        <form action="https://www.youtube.com/watch?v=VJZo140ErjI/" method="get" target="_blank">
                            <button className='third-btn'> Подписаться</button>
                        </form>
                    </div>
                    
                </div>
                <div className='home__fourth-box' >
                    <img alt='da' src={charge} style={{height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'left'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home