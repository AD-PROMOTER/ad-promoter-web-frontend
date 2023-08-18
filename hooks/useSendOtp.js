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

    const response = await fetch(
      'https://api.ad-promoter.com/api/v1/auth/send-otp',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      toast({
        title: json.msg,
        status: 'error',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
    }
    if (response.ok) {
      setIsLoading(false);
      localStorage.setItem('OTP_INFO', JSON.stringify(json));
      router.push('/signup/verification');
    }
  };
  return { sendOtp, isLoading, otpMsg, otpError };
};
