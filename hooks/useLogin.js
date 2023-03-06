import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch, user } = useAuthContext();

  const login = async (phoneNumber, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://35.153.52.116/api/v1/auth/signin', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber,
        password,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json);
      console.log('user not logged in');
      setError(json.msg);
      console.log(phoneNumber);
      console.log(password);
    }
    if (response.ok) {
      console.log(json);
      console.log('user logged in');
      setError(json.success);

      //save user to local storage
      localStorage.setItem('token', JSON.stringify(json));

      //update the auth context
      dispatch({ type: 'TOKEN_VALUE', payload: json });
    }
  };
  return { login, isLoading, error, msg };
};
