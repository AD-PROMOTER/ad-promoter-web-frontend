import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export const AddUserPref = () => {
  const [token, setToken] = useState('');
  const [isPrefLoading, setIsPrefLoading] = useState('');
  const toast = useToast();
  const success = useRef();
  const router = useRouter();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const addUserPref = async (userPref, seeVisualAd, linkValue, socialLink) => {
    setIsPrefLoading(true);

    const response = await fetch('https://api.ad-promoter.com/api/v1/user', {
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
      setIsPrefLoading(false);
      toast({
        title: json.msg,
        status: 'warning',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
    }
    if (response.ok) {
      setIsPrefLoading(false);
      localStorage.setItem('user-detail', JSON.stringify(json.data));
      if (json.data.role === 'placer') {
        router.push('/placers');
        toast({
          title: 'Logged In as a Placer Successfully',
          status: 'success',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
      } else if (json.data.role === 'promoter') {
        router.push('/promoters');
        toast({
          title: 'Logged In as a Promoter Successfully',
          status: 'success',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
      }
    }
  };
  return { addUserPref, isPrefLoading, success };
};
