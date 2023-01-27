import React, {useState} from 'react'
import Image from 'next/image'
import back from '@/public/assets/back-icon.svg'
import change from '@/public/assets/profile-change.svg'
import upload from '@/public/assets/upload-icon.svg'
import { ProfileContainer } from './mobileSettings.style'

const Profile = ({handleBack}) => {
    const [name, setName] = useState('Skylar Diaz');
    const [email, setEmail] = useState('Skylar@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+2348191014589');
    const [profileModal, setProfileModal] = useState(false);
    const [listValue, setListValue] = useState('None')
    const [showDropdown, setShowDropdown] = useState(false)
    const [isChangesMade, setIsChangesMade] = useState(false)

    const ClickedList = (e) =>{
      setListValue(e.target.innerText)
      setIsChangesMade(true)
      setShowDropdown(false)
    }
    const handleSaveChanges = (e) =>{
      e.preventDefault()
      setIsChangesMade(false)
  }
  return (
    <ProfileContainer>
      <div className='profile'>
        <div onClick={handleBack}>
          <Image src={back} alt="back"/>
        </div>
        <h3>Profile</h3>
      </div>
      <div className='picture-change'>
        <Image src={change} alt="change" onClick={() => setProfileModal(true)}/>
        <p>Profile Picture</p>
      </div>
      { profileModal && <div className="backdrop" onClick={() => setProfileModal(false)} />}
      { profileModal && 
        (<div className="photo-modal">
          <h3>Change Profile Photo</h3>
          <div className='upload'>
            <Image src={upload} alt='upload'/>
            <p>Upload new photo</p>
          </div>
          <div className='cancel' onClick={() => setProfileModal(false)}>Cancel</div>
        </div>
      )}
      <div className='profile-details'>
        <div className='form-field'>
          <label htmlFor="name">Account Name </label>
          <input type='text' name='name' value={name} id='name' onChange={(e) => {setName(e.target.value),setIsChangesMade(true)}}/>
        </div>
        <div className='form-field'>
          <label htmlFor="account-address" > Email Address </label>
          <input type='email' name='account-address' value={email} id='name' onChange={(e) => {setEmail(e.target.value),setIsChangesMade(true)}} />
        </div>
        <div className='form-field'>
          <label htmlFor="account-phoneNumber" > Phone Number </label>
          <input type='tel' maxLength={14} name='account-phoneNumber' value={phoneNumber} id='name' onChange={(e) => {setPhoneNumber(e.target.value),setIsChangesMade(true)}} />
        </div>
        <div className='form-field'>
          <label htmlFor="date" > Date Of Birth </label>
          <input type='date' name='date' placeholder="DD/MM/YYYY" className='date' />
        </div>
        <div className="form-field">
          <h3>Gender</h3>
          <div className='dropdown' onClick={() => setShowDropdown(!showDropdown)}>
            <p className='inputText'>{listValue}</p>
          </div>
          {showDropdown && (
              <ul className="dropdown-container">
                <li onClick={ClickedList}>Male</li>
                <li onClick={ClickedList}>Female</li>
              </ul>
            )}
        </div>
      </div>
      <div className='changes'>
        <div className='discard'>Discard</div>
        <div className={isChangesMade ? 'save' : 'inactive'} onClick={handleSaveChanges}>Save Changes</div>
      </div>
    </ProfileContainer>
  )
}

export default Profile
