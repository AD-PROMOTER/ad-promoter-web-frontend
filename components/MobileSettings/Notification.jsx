import React, {useState} from 'react'
import Image from 'next/image'
import back from '@/public/assets/back-icon.svg'
import { NotifContainer } from './mobileSettings.style'

const Notification = ({handleBack}) => {
    const [clicked, setClicked] = useState(false);
    const [email , setEmail] = useState(true);
    const [desktop , setDesktop] = useState(false);
    const [others , setOthers] = useState(true);
    const [isChangesMade, setIsChangesMade] = useState(false)

  return (
    <NotifContainer>
      <div className='notification'>
        <div onClick={handleBack}>
            <Image src={back} alt="back"/>
        </div>
        <h3>Notification</h3>
      </div>
      <ul className='notifications-selection'>
                    <li> 
                        <div className='container'>
                            <input 
                                className='checkbox'
                                id='checkbox'
                                type='checkbox'
                                onChange={() => {setClicked(!clicked),setIsChangesMade(true)} }
                                checked={!clicked}
                            />

                            <label htmlFor='checkbox'>
                                <i className='one'></i>
                                <i className='two'></i>
                                <div className='ball' style={{ backgroundColor: !clicked ? 'var(--light-blue)' : '#EDEDED' }}  />
                            </label>   
                        </div>
                        <span> Browser notification </span>

                    </li>
                    <div className='line'></div>

                    <li key={2}>
                        <div className='container'>
                            <input 
                                className='checkbox'    
                                id="checkbox-2"      
                                type='checkbox'
                                onChange={() => {setEmail(!email), setIsChangesMade(true)}}
                                checked={!email}
                            />

                            <label htmlFor='checkbox-2'>
                                <i className='one'></i>
                                <i className='two'></i>
                                <div className='ball' style={{ backgroundColor: !email ? 'var(--light-blue)' : '#EDEDED' }}  />
                            </label>   
                        </div>
                        <span> Email notification </span>

                    </li>
                    <div className='line'></div>
                    <li key={3}> 
                        <div className='container'>
                            <input 
                                className='checkbox'                       
                                type='checkbox'
                                id="checkbox-3"
                                onChange={() => {setDesktop(!desktop), setIsChangesMade(true)}}
                                checked={!desktop}
                            />

                            <label htmlFor='checkbox-3'>
                                <i className='one'></i>
                                <i className='two'></i>
                                <div className='ball' style={{ backgroundColor: desktop ? '#EDEDED' : 'var(--light-blue)'}}  />
                            </label>   
                        </div>
                        <span> Dektop notification </span>

                    </li>
                    <div className='line'></div>
                    <li key={4}> 
                        <div className='container'>
                            <input 
                                className='checkbox'          
                                type='checkbox'
                                id="checkbox-4"
                                onChange={() => {setOthers(!others),setIsChangesMade(true)}}
                                checked={!others}
                            />

                            <label htmlFor='checkbox-4'>
                                <i className='one'></i>
                                <i className='two'></i>
                                <div className='ball' style={{ backgroundColor: others ? '#EDEDED' : 'var(--light-blue)' }}  />
                            </label>   
                        </div>
                        <span> Notify me on all offers </span>

                    </li>


            </ul>
    </NotifContainer>
  )
}

export default Notification
