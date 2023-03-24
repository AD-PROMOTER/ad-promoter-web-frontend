import { createContext, useEffect, useRef, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('none');
  const [profilePicture, setProfilePicture] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [seeVisualAd, setSeeVisualAd] = useState(false);

  return (
    <UserContext.Provider
      value={{
        accountName,
        setAccountName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        setDateOfBirth,
        dateOfBirth,
        gender,
        setGender,
        setProfilePicture,
        profilePicture,
        socialLink,
        setSocialLink,
        seeVisualAd,
        setSeeVisualAd,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
