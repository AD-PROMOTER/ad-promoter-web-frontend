import { useEffect, useState, useRef } from 'react';
import { StyledProfile, Button, PlainButton, Danger } from '../settings.style';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import profileImg from '../../../public/assets/profile.jpg';
import upload from '../../../public/assets/upload.png';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import arrowUp from '@/public/assets/arrow-up.svg';
import arrowDown from '@/public/assets/arrow-down.svg';
import profile from '@/public/assets/user-onboard-profile.png';
import uploadImage from '@/helper/imageUploader';
import DefaultPic from '@/public/assets/squared-profile.png'

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState();
  const [profileImage, setProfileImage] = useState();
  const [profileModal, setProfileModal] = useState(false);
  const [listValue, setListValue] = useState('None');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isChangesMade, setIsChangesMade] = useState(false);
  const [userToken, setUserToken] = useState();
  const [imageUploaderError, setImageUploaderError] = useState("");

  const toast = useToast();

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
      if(!user.profilePicture || user.profilePicture === ''){
        setProfileImage('')
      }else{
        setProfileImage(user.profilePicture);
      }
    }
  }, [setName, setEmail, setPhoneNumber]);

  const maleGenderRef = useRef();
  const femaleGenderRef = useRef();

  const getMale = () => {
    setListValue(maleGenderRef.current.innerText);
    setIsChangesMade(true);
    setShowDropdown(false);
  }

  const getFemale = () => {
    console.log(femaleGenderRef.current.innerText);
    setIsChangesMade(true);
    setShowDropdown(false);
  }

  const ClickedList = (e) => {
    setListValue(e.target.innerText);
    setIsChangesMade(true);
    setShowDropdown(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsChangesMade(false);
  };

  const handleFileInput = async (e) => {
    const files = e.target.files;
    const result = await uploadImage(files);

    if(result === "erorr code 500") {
      setImageUploaderError("Something went wrong while trying to upload image");
    }

    setImage(result[0])

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
    <StyledProfile style={{ alignItems: profileModal && 'center' }}>
      <div className="profile-image">
        <p> Profile picture </p>
        <div className="image-wrapper">
          {profileImage === '' ? (
            <Image
              src={DefaultPic}
              onClick={() => setProfileModal(true)}
              alt="Profile"
              style={{ cursor: 'pointer', borderRadius: '50%' }}
              height={105}
              width={105}
              objectFit="cover"
            />
          ):(
            <Image
              src={profileImage}
              onClick={() => setProfileModal(true)}
              alt="Profile"
              style={{ cursor: 'pointer', borderRadius: '50%' }}
              height={105}
              width={105}
              objectFit="cover"
            />
          )}
          <div className="upload-icon">
            <Image
              src={upload}
              onClick={() => setProfileModal(true)}
              alt="Profile"
              height={20}
              width={20}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {profileModal && (
        <div className="blurred" onClick={() => setProfileModal(false)} />
      )}

      {profileModal && (
        <div className="modal photo-modal">
          <div className="close-modal" onClick={() => setProfileModal(false)}>
            <VscClose
              style={{
                height: '19px',
                width: '19px',
                color: 'var(--dark-gray)',
              }}
            />
          </div>

          <div className="contents">
            {/* <TbLogout style={{ height: '27px', width: '27px', color: 'red' }} /> */}
            {imageUploaderError ? <div className='contents__imageError'>{imageUploaderError}</div> : null}
            <p> Change Profile Photo </p>
            <div className="upload">
              <AiOutlineCloudUpload
                style={{ height: '20px', width: '20px', color: 'black' }}
              />
              <input
                type="file"
                placeholder="Upload new photo"
                accept=".jpg, .png"
                onChange={handleFileInput}
                multiple
              />
              <label>Upload new photo</label>
            </div>

            <div className="cancel">
              <Danger onClick={() => setProfileModal(false)}> Cancel </Danger>
            </div>
          </div>
        </div>
      )}

      <form className="profile-details" onSubmit={handleSubmit}>
        <div className="form-field account-name">
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

        <div className="form-field account-address">
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

        <div className="form-field account-phoneNumber">
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

        <div className="form-field account-birth">
          <label htmlFor="date"> Date Of Birth </label>
          <input
            type="date"
            name="date"
            placeholder="DD/MM/YYYY"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className="dropdownContainer form-field">
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
            <ul className="">
              <li ref={maleGenderRef} onClick={getMale}>Male</li>
              <li ref={femaleGenderRef} onClick={getFemale}>Female</li>
            </ul>
          )}
        </div>

        <div className="controls">
        <PlainButton> Discard </PlainButton>
        <Button
          // onClick={handleSaveChanges}
          className={isChangesMade ? '' : 'inactive'}
        >
          Save changes{' '}
        </Button>
      </div>
      </form>

      {/* <div className="controls">
        <PlainButton> Discard </PlainButton>
        <Button
          onClick={handleSaveChanges}
          className={isChangesMade ? '' : 'inactive'}
        >
          Save changes{' '}
        </Button>
      </div> */}
    </StyledProfile>
  );
};

export default Profile;
