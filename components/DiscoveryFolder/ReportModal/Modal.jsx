import React, { useState } from 'react'
import Image from 'next/image'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import { ModalContainer } from './ModalStyle'

const Modal = () => {
    const [showDropdown, setShowDropdown] = useState(false)

  return (
    <ModalContainer>
      <div className='report'>
        <p className='advert'>Report Advert</p>
        <p className='reason'>Tell us why you want to report this advert?</p>
      </div>
      <div className='language'>Why are you reporting this advert</div>
      <div className='inputArea' onClick={() => setShowDropdown(!showDropdown)}>
        <div className='inputText'>It has gory images</div>
        {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
      </div>
      {showDropdown && (
        <ul>
            <li>It has gory images</li>
            <li>It is a scam advert</li>
            <li>It has nudity or sexual content</li>
            <li>Other reasons</li>
        </ul>
      )}
      <div className='reportButton'>
        <button>Send Report</button>
      </div>
    </ModalContainer>
  )
}

export default Modal
