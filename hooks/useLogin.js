import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '@/context/authContext';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const { setAuth } = useAuthContext();
  const { setAuth } = useContext(AuthContext);
  const toast = useToast();
  const router = useRouter();

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await fetch(
      'https://api.ad-promoter.com/api/v1/auth/signin',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      error.current = json.success;
      toast({
        title: json.msg,
        status: 'warning',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
      setIsLoading(false);
    }
    if (response.ok) {
      //save user to local storage
      localStorage.setItem('user-token', JSON.stringify(json?.token));
      localStorage.setItem('user-detail', JSON.stringify(json?.user));

      //update the auth context
      setAuth(json);

      setIsLoading(false);
      toast({
        title: 'Logged In Successfully',
        status: 'success',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
      if (json.user.role === 'placer') {
        router.push('placers');
      } else if (json.user.role === 'promoter') {
        router.push('promoters');
      }
    }
  };
  return { login, isLoading };
};
