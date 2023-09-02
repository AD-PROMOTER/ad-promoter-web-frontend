import LandingPage from '@/components/LandingPage';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useCreateAds = () => {
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [redirect, setRedirect] = useState('');
  const [data, setData] = useState();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const createAd = async (
    productName,
    redirectUrl,
    productDescription,
    tags,
    advertType,
    cta,
    images,
    webAddress,
    amount,
    containAdultContent
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://api.ad-promoter.com/api/v1/ads/create',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productName,
          redirectUrl,
          description: productDescription,
          tags,
          type: advertType,
          CTAButtonDesign: cta,
          images,
          promotedLink: webAddress,
          budget: amount,
          isNfsw: containAdultContent,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      if (json.msg === 'type must be a valid enum value') {
        toast({
          title: 'Pick an advert type',
          status: 'error',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
      } else {
        toast({
          title: json.msg,
          status: 'error',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
      }
      setIsLoading(false);
    }
    if (response.ok) {
      setIsLoading(false);
      setData(json.data.ad);

      // if(advertType === 'detail'){
      //   router.push(`/ad/${json.data.ad._id}`);
      // }else{
      router.push(json.data.paymentDetails.url);
      // }
      localStorage.setItem('landingData', JSON.stringify(json.data.ad._id));
    }
  };
  return { createAd, data, isLoading, error, msg, redirect, data };
};
