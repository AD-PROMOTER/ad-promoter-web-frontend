import React, {useState} from 'react'
import Image from 'next/image'
import back from '@/public/assets/back-icon.svg'
import { SecurityContainer } from './mobileSettings.style'

const Security = ({handleBack}) => {
    const [value, setValue] = useState('alanByte003');
    const [newValue, setNewValue] = useState('');
    const [email, setEmail] = useState('Email to send verification link')
    const [recovery, setRecovery] = useState('Email to send verification link')
    const [confirmValue, setConfirmValue] = useState('');
    const [isChangesMade, setIsChangesMade] = useState(false)
    const [inputError, setInputError] = useState(false)
    const handleSaveChanges = (e) =>{
        e.preventDefault()
        if(confirmValue !== newValue){
            setIsChangesMade(true)
            setInputError(true)
        }else{
            setIsChangesMade(false)
            setInputError(false)
        }
    }

  return (
    <SecurityContainer>
        <div className='security'>
            <div onClick={handleBack}>
                <Image src={back} alt="back"/>
            </div>
            <h3>Security</h3>
        </div>
        <div className="info">
            <p> Password </p>
            <span> In order to better protect your account, make sure you set up a strong and secure password. </span>
        </div>

        <form>
            <div className="pwd current-pwd">
                <label htmlFor="current-pwd"> Current Password </label>
                <input type="password" name="password" value={value} onChange={(e) => {setValue(e.target.value),setIsChangesMade(true)}} readOnly />
            </div>
            <div className="pwd new-pwd">
                <label htmlFor="current-pwd"> New Password </label>
                <input type="password" name="password" value={newValue} onChange={(e) => {setNewValue(e.target.value),setIsChangesMade(true)}} required />
            </div>
            <div className="pwd confirm-pwd">
                <label htmlFor="current-pwd"> Confirm Password </label>
                    <input className={inputError ? 'input-error' : ''} type="password" name="password" value={confirmValue} onChange={(e) => {setConfirmValue(e.target.value),setIsChangesMade(true)}} required />
            </div>
            <div className='email-field'>
                <label htmlFor="email">Another email</label>
                <input type='email' name='email' value={email} onChange={(e) => {setEmail(e.target.value),setIsChangesMade(true)}}/>
            </div>
            <div className='line'></div>
            <div className='email-field'>
                <label htmlFor="email">SMS recovery</label>
                <input type='email' name='email' value={recovery} onChange={(e) => {setRecovery(e.target.value),setIsChangesMade(true)}}/>
            </div>
        </form>
        <div onClick={handleSaveChanges} className={isChangesMade ? 'inactive' : 'controls'}>Save Changes</div>
    </SecurityContainer>
  )
}

export default Security
