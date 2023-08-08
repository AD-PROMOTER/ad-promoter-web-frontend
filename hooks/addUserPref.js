import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export const AddUserPref = () => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const toast = useToast();
  const success = useRef();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const addUserPref = async (userPref, seeVisualAd, linkValue, socialLink) => {
    setIsLoading(true);

    const response = await fetch('/api/v1/user', {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        role: userPref,
        seeVisualAd,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      success.current = false;
      setIsLoading(false);
      toast({
        title: json.msg,
        status: 'warning',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
    }
    if (response.ok) {
      setIsLoading(false);
      localStorage.setItem('user-detail', JSON.stringify(json.data));
      toast({
        title: 'Logged In Successfully',
        status: 'success',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });

      if (userPref === 'placer') {
        router.push('/placers');
      } else if (userPref === 'promoter') {
        router.push('/promoters');
      }
    }
  };
  return { addUserPref, isLoading, success };
};
