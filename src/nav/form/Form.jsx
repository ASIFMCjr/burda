import axios from 'axios';
import React from 'react'
import './Form.css'
import x from '../../assets/icons/x.png'
import Modal from 'react-modal'
import { useState } from 'react';

const Form = ({ nameModal, classModal }) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')

    // Modal window
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    

    function sendTodoToMockAPI() {
      
        axios({
          method: 'post',
          url: 'https://639e500f3542a261305a1a2b.mockapi.io/items',
          data: {"name": name,
          "phone": phone}
        });
      
    }

    const pressHandler = () => {
        
        onclick(name,phone,sendTodoToMockAPI(name, phone))
        setName('')
        setPhone('')
        
    }
    
  return (
    <>
    {/* 'head__up-contacts_zayavka btn' */}
    <button onClick={openModal} className={classModal}>{nameModal}</button>

    <Modal size='xs'  isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal">
                            
                    <div className='form'>
                        <div className='form__block'>
                            <button style={{padding: '0', border: 'none', background: 'none'}} onClick={closeModal} className='form__block-btn'><img alt='x' src={x}/></button>
                            <div className='form__block-main'>
                                
                                    <h1 className='form-h1'>Связаться с нами</h1>
                                    <p>Заполните контактные данные ниже и мы свяжемся с вами в ближайшее время</p>
                                    <input onChange={e => setName(e.target.value)} className='form__input' placeholder='Имя'></input>
                                    <input onChange={e => setPhone(e.target.value)} className='form__input' placeholder='Телефон'></input>
                                    
                                    <button onClick={() => {alert('Форма отправлена');pressHandler()}} className='form-btn'>Отправить</button>
                                
                            </div>
                        </div>
                    </div>
                </Modal>
                    </>
  )
}

export default Form