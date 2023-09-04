import React from 'react'
import './Projects.css'
import backgroundProjects from '../../assets/screens/projects/background.png'
import block1 from '../../assets/screens/projects/blocks/block1.png'
import block2 from '../../assets/screens/projects/blocks/block2.png'
import block3 from '../../assets/screens/projects/blocks/block3.png'
import block4 from '../../assets/screens/projects/blocks/block4.png'
import block5 from '../../assets/screens/projects/blocks/block5.png'
import block6 from '../../assets/screens/projects/blocks/block6.png'
import block7 from '../../assets/screens/projects/blocks/block7.png'
import block8 from '../../assets/screens/projects/blocks/block8.png'
import { Form } from '../../nav'

export const Block = ({img}) => (
    <>
        <div 
             style={{
                                            backgroundImage: `url(${img})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: 'no-repeat',
                                            backgroundAttachment: 'scroll',
                                            backgroundPosition: 'center'}}  className='projects__block' >
            <div className='projects__block-inside'>
                <h2>Умная рабочая станция Monolith</h2>
                <p>Стол на подъемном механизме, с USB блоком, Type-C коцнентратором и декоративной эпоксидной заливкой, с 2-мя типами подсветки</p>
                <Form classModal={'order-btn projects__order-btn'}  nameModal={'Узнать больше'}/>
            </div>
        </div>
        
    </>
)

export const ProjectBlocks = () => (
    <>
        <div className='projects__blocks'>
            <Block img={block1} /><Block img={block2}/>
            <Block img={block3} /><Block img={block4}/>
            <Block img={block5} /><Block img={block6}/>
            <Block img={block7} /><Block img={block8}/>
        </div>
    </>
)

const Projects = () => {
   
  return (
    <div>
        <div className='home__first'>
            <div className='home__first-up' style={{height: '100vh', width: '100%',
                                            backgroundImage: `url(${backgroundProjects})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: 'no-repeat',
                                            backgroundAttachment: 'scroll',
                                            backgroundPosition: 'center',
                                            marginTop: '-22px'}}>
                <div className='home__first-up_text'>
                        <h1>Проекты<br/> Mensa Design</h1>
                        <p>Посмотрите на конкретных примерах, как и какие<br/> проблемы мы решали для наших клиентов</p>
                        <Form classModal={'order-btn'}  nameModal={'Заказать просчёт'}/>
                </div>
            </div>
            
        </div>
        <div className='projects__forblocks'>
            <ProjectBlocks />
        </div>
    </div>
  )
}

export default Projects