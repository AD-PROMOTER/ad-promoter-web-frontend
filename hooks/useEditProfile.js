import { useEffect, useState } from 'react';

export const useEditProfile = () => {
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('token'));
    if (userDetails) {
      setToken(userDetails.token);
    }
  });

  const editProfile = async (
    accountName,
    email,
    phoneNumber,
    gender,
    socialLink,
    seeVisualAd,
    dateOfBirth,
    profilePicture
  ) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(`http://35.153.52.116/api/v1/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        phoneNumber,
        accountName,
        gender,
        socialLink,
        seeVisualAd,
        dateOfBirth,
        profilePicture,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json);
      console.log('user profile not updated');
      setIsLoading(false);
    }
    if (response.ok) {
      console.log(json);
      console.log('user profile updated');
      setIsLoading(false);
    }
  };
  return { editProfile, isLoading, error, msg };
};
