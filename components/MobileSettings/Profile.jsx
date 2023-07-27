import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import back from '@/public/assets/back-icon.svg';
import change from '@/public/assets/profile-change.svg';
import upload from '@/public/assets/upload-icon.svg';
import { ProfileContainer } from './mobileSettings.style';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Danger } from '../settings/settings.style';
import uploadImage from '@/helper/imageUploader';

const Profile = ({ handleBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileModal, setProfileModal] = useState(false);
  const [listValue, setListValue] = useState('None');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isChangesMade, setIsChangesMade] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [userToken, setUserToken] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [imageUploaderError, setImageUploaderError] = useState('');
  const [image, setImage] = useState();

  const ClickedList = (e) => {
    setListValue(e.target.innerText);
    setIsChangesMade(true);
    setShowDropdown(false);
  };
  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsChangesMade(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user-detail'));
    const token = JSON.parse(localStorage.getItem('user-token'));
    setUserToken(token);
    if (user) {
      setName(user.accountName);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
      setDateOfBirth(user.dateOfBirth);
      setListValue(user.gender);
      setProfileImage(user.profilePicture);
    }
  }, [setName, setEmail, setPhoneNumber]);

  const maleGenderRef = useRef();
  const femaleGenderRef = useRef();

  const getMale = () => {
    setListValue(maleGenderRef.current.innerText);
    setIsChangesMade(true);
    setShowDropdown(false);
  };

  const getFemale = () => {
    setIsChangesMade(true);
    setShowDropdown(false);
  };

  const handleFileInput = async (e) => {
    const files = e.target.files;
    const result = await uploadImage(files);

    if (result === 'erorr code 500') {
      setImageUploaderError(
        'Something went wrong while trying to upload image'
      );
    }

    setImage(result[0]);

    setIsChangesMade(true);

    setProfileModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userDetails = {};

    if (email) userDetails.email = email;
    if (name) userDetails.accountName = name;
    if (phoneNumber) userDetails.phoneNumber = phoneNumber;
    if (listValue) userDetails.gender = listValue.toLowerCase();
    if (image) userDetails.profilePicture = image;
    if (email) userDetails.dateOfBirth = dateOfBirth;

    const response = await fetch(
      'https://api.ad-promoter.com/api/v1/user/',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(userDetails),
      }
    );

    try {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }

      if (response.status === 500) {
        throw new Error('Could not update password please try again');
      }

      if (response.status === 200) {
        const data = await response.json();
        toast({
          title: 'Password Updated',
          status: 'sucess',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
        window.localStorage.setItem("user-detail", JSON.stringify(data.data))
        window.location.reload();
      }
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: 'warning',
        duration: '5000',
        isClosable: true,
        position: 'top-left',
      });
    }

    setIsChangesMade(false);
  };

  return (
    <ProfileContainer>
      <div className="profile">
        <div onClick={handleBack}>
          <Image src={back} alt="back" />
        </div>
        <h3>Profile</h3>
      </div>
      <div className="picture-change">
        <Image
          src={profileImage}
          alt="Profile image"
          onClick={() => setProfileModal(true)}
          style={{ cursor: 'pointer', borderRadius: '50%' }}
          height={105}
          width={105}
          objectFit="cover"
        />
        <p>Profile Picture</p>
      </div>
      {profileModal && (
        <div className="backdrop" onClick={() => setProfileModal(false)} />
      )}

      {profileModal && (
        <div className="photo-modal">
          {imageUploaderError ? <div className='photo-modal__imageError'>{imageUploaderError}</div> : null}
          <h3>Change Profile Photo</h3>
          <div className="upload">
            <Image src={upload} alt="upload" />
            <input
              type="file"
              accept=".jpg, .png"
              onChange={handleFileInput}
            />
            <label>Upload new photo</label>
          </div>
          <div className="cancel" onClick={() => setProfileModal(false)}>
            Cancel
          </div>
        </div>
      )}
      <form className="profile-details" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Account Name </label>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            onChange={(e) => {
              setName(e.target.value), setIsChangesMade(true);
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="account-address"> Email Address </label>
          <input
            type="email"
            name="account-address"
            value={email}
            id="name"
            onChange={(e) => {
              setEmail(e.target.value), setIsChangesMade(true);
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="account-phoneNumber"> Phone Number </label>
          <input
            type="tel"
            maxLength={14}
            name="account-phoneNumber"
            value={phoneNumber}
            id="name"
            onChange={(e) => {
              setPhoneNumber(e.target.value), setIsChangesMade(true);
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="date"> Date Of Birth </label>
          <input
            type="date"
            name="date"
            placeholder="DD/MM/YYYY"
            className="date"
            value={dateOfBirth}
            onChange={() => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="form-field">
          <h3>Gender</h3>
          <div
            className="dropdown"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {!listValue ? (
              <p className="inputText">None</p>
            ) : (
              <p className="inputText">{listValue}</p>
            )}
          </div>
          {showDropdown && (
            <ul className="dropdown-container">
              <li ref={maleGenderRef} onClick={getMale}>
                Male
              </li>
              <li ref={femaleGenderRef} onClick={getFemale}>
                Female
              </li>
            </ul>
          )}
        </div>
      </form>
      <div className="changes">
        <div className="discard">Discard</div>
        <div
          className={isChangesMade ? 'save' : 'inactive'}
          onClick={handleSaveChanges}
        >
          Save Changes
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
