import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (
    refId,
    otp,
    phoneNumber,
    accountName,
    linkValue,
    seeVisualAd,
    email,
    password,
    userPref
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://api.ad-promoter.com/api/v1/auth/signup',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reference_id: refId,
          otp,
          phoneNumber,
          accountName,
          socialLink: linkValue,
          seeVisualAd,
          email,
          password,
          role: userPref,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError('Sign Up failed');
      toast({
        title: json.msg,
        status: 'warning',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
    }
    if (response.ok) {
      //save user to local storage
      localStorage.setItem('user-token', JSON.stringify(json.token));
      localStorage.setItem('user-detail', JSON.stringify(json.user));

      //update the auth context
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
