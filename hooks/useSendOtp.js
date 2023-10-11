import axios from '@/pages/api/axios';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useSendOtp = () => {
  const [otpError, setOtpError] = useState(null);
  const [otpMsg, setOtpMsg] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [refId, setRefId] = useState('');
  const toast = useToast();
  const router = useRouter();

  const sendOtp = async (phoneNumber) => {
    setIsLoading(true);

    try {
      const response = await axios.post('/api/v1/auth/send-otp', {
        phoneNumber,
      });

      const json = response.data;

      if (response.status === 200) {
        setIsLoading(false);
        localStorage.setItem('OTP_INFO', JSON.stringify(json));
        router.push('/signup/verification');
      } else {
        setIsLoading(false);
        toast({
          title: json.msg,
          status: 'error',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setIsLoading(false);
      toast({
        title: 'Error sending OTP',
        status: 'error',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
    }
  };

  return { sendOtp, isLoading, otpMsg, otpError };
};
