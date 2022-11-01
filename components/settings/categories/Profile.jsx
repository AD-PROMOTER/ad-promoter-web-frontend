import { useState } from "react"
import { StyledProfile, Button, PlainButton, Danger } from "../settings.style"
import Image from "next/image"
import profileImg from '../../../public/assets/profile.jpg'
import upload from '../../../public/assets/upload.png'
import { VscClose } from 'react-icons/vsc';
import { AiOutlineCloudUpload } from 'react-icons/ai'


const Profile = () => {
    const [name, setName] = useState('Skylar Diaz');
    const [email, setEmail] = useState('skylardiaz@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+2348191014589');
    const [profileModal, setProfileModal] = useState(false);

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

            {/* <div className="help-center-container">
                <div className="question-mark">
                    <span> ? </span>
                </div>
                
                <div className="help-center">
                    <div className="contents">
                        <p> Help Center </p>
                        <span> Having Trouble in Learning. <br /> Please contact us for more questions. </span>
                    </div>

                    <button> Go to Help Center </button>
                    <div className="overlay" />
                    <div className="overlay-2" />
                </div>
            </div> */}

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
                    <label htmlFor="name" > Account Name </label>
                    <input type='text' name='name' value={name} id='name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='form-field account-address'>
                    <label htmlFor="account-address" > Email Address </label>
                    <input type='email' name='account-address' value={email} id='name' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='form-field account-phoneNumber'>
                    <label htmlFor="account-phoneNumber" > Phone Number </label>
                    <input type='tel' maxLength={14} name='account-phoneNumber' value={phoneNumber} id='name' onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>

                <div className='form-field account-birth'>
                    <label htmlFor="date" > Date Of Birth </label>
                    <input type='date' name='date'  />
                </div>

                <div className='form-field gender'>
                    <label htmlFor="name" > Gender </label>
                    <select name='gender'>
                        <option> None </option>
                        <option> Male </option>
                        <option>Female </option>
                    </select>
                </div>
            </div>

            <div className="controls">
                <PlainButton> Discard </PlainButton>
                <Button>Save changes </Button>
            </div>
        </StyledProfile>
    )
}

export default Profile

