import axios from 'axios';
import { useEffect, useState } from 'react';

export const useImageUpload = () => {
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    if (userToken) {
      setToken(userToken.token);
    }
    // console.log(token);
  });

  const imageUpload = async (formData) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'http://35.153.52.116/api/v1/fileUpload/image',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          Accept: '*/*',
        },
        body: formData,
      }
    );
    const json = await response.json();

    if (!response.ok) {
      console.log(json);
      console.log('image not uploaded');
    }
    if (response.ok) {
      console.log(json);
      console.log('image uploaded');
    }
  };
  return { imageUpload, isLoading, error, msg };
};
