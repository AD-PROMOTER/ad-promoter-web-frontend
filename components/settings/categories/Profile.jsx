import { useContext, useEffect, useState } from "react"
import { StyledProfile, Button, PlainButton, Danger } from "../settings.style"
import Image from "next/image"
import profileImg from '../../../public/assets/profile.jpg'
import upload from '../../../public/assets/upload.png'
import { VscClose } from 'react-icons/vsc';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import UserContext from "@/context/userContext"
import { useEditProfile } from "@/hooks/useEditProfile"


const Profile = () => {
    const [profileModal, setProfileModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false)
    const [isChangesMade, setIsChangesMade] = useState(false)
    const {accountName, setAccountName,email, setEmail,phoneNumber, setPhoneNumber,setDateOfBirth,dateOfBirth,gender, setGender,setProfilePicture,profilePicture,socialLink,seeVisualAd} = useContext(UserContext)
    const {editProfile} = useEditProfile()


    const ClickedList = (e) =>{
        setGender(e.target.innerText)
        setIsChangesMade(true)
        setShowDropdown(false)
    }

    const handleSaveChanges = (e) =>{
        e.preventDefault()
        editProfile(accountName,email,phoneNumber,gender,socialLink,seeVisualAd,dateOfBirth,profilePicture)
        setIsChangesMade(false)
    }

    return (
        <StyledProfile style={{ alignItems: profileModal && 'center' }}>
            <div className='profile-image'>
                <p> Profile picture </p>
                <div className='image-wrapper'>
                    <Image src={profileImg} onClick={() => setProfileModal(true)} alt='Profile' style={{ cursor: 'pointer', borderRadius: '50%' }} height={105} width={105} objectFit='contain' />
                    <div className='upload-icon'>
                        <Image src={upload} onClick={() => setProfileModal(true)}  alt='Profile' height={20} width={20} objectFit='contain' />
                    </div>
                </div>
            </div>

            { profileModal && <div className="blurred" onClick={() => setProfileModal(false)} />}

            { profileModal && <div className="modal photo-modal">
                <div className="close-modal" onClick={() => setProfileModal(false)}>
                    <VscClose style={{ height: '19px', width: '19px', color: 'var(--dark-gray)' }} />
                </div>

                <div className="contents">
                    {/* <TbLogout style={{ height: '27px', width: '27px', color: 'red' }} /> */}
                    <p> Change Profile Photo </p>
                    <div className="upload">
                        <AiOutlineCloudUpload style={{ height: '20px', width: '20px', color: 'black' }} />
                        <span> Upload new photo </span>
                    </div>

                    <div className='cancel'>
                        <Danger onClick={() => setProfileModal(false)}> Cancel </Danger>
                    </div>
                </div>
            </div> }

            <div className='profile-details'>
                <div className='form-field account-name'>
                    <label htmlFor="name">Account Name </label>
                    <input type='text' name='name' value={accountName} id='name' onChange={(e) => {setAccountName(e.target.value),setIsChangesMade(true)}}/>
                </div>

                <div className='form-field account-address'>
                    <label htmlFor="account-address" > Email Address </label>
                    <input type='email' name='account-address' value={email} id='name' onChange={(e) => {setEmail(e.target.value),setIsChangesMade(true)}} />
                </div>

                <div className='form-field account-phoneNumber'>
                    <label htmlFor="account-phoneNumber" > Phone Number </label>
                    <input type='tel' maxLength={14} name='account-phoneNumber' value={phoneNumber} id='name' onChange={(e) => {setPhoneNumber(e.target.value),setIsChangesMade(true)}} />
                </div>

                <div className='form-field account-birth'>
                    <label htmlFor="date" > Date Of Birth </label>
                    {/* <input type="date" name="" id="" /> */}
                    <input type='date' name='date' onChange={(e)=>{setDateOfBirth(e.target.value),setIsChangesMade(true)}} value={dateOfBirth} />
                </div>

                <div className="dropdownContainer form-field">
                    <h3>Gender</h3>
                    <div className='dropdown' onClick={() => setShowDropdown(!showDropdown)}>
                        {gender ? (
                            <p className='inputText'>{gender}</p>
                        ):(
                            <p className='inputText'>None</p>
                        )}
                    </div>
                    {showDropdown && (
                        <ul className="">
                            <li onClick={ClickedList}>male</li>
                            <li onClick={ClickedList}>female</li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="controls">
                <PlainButton> Discard </PlainButton>
                <Button onClick={handleSaveChanges} className={isChangesMade ? '' : 'inactive'}>Save changes </Button>
            </div>
        </StyledProfile>
    )
}

export default Profile

