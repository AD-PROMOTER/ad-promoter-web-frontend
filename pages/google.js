import { Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Success = () => {
  const router = useRouter();
  const { accessToken } = router.query;
  const toast = useToast();

  useEffect(() => {
    const fetchGoogleUser = async () => {
      const result = await axios(`https://api.ad-promoter.com/api/v1/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.setItem('user-token', JSON.stringify(accessToken));
      localStorage.setItem('user-detail', JSON.stringify(result.data.data));
      if (result.data.data.role === 'placer') {
        router.push('placers');
      } else if (result.data.data.role === 'promoter') {
        router.push('promoters');
      } else {
        router.push('/signup/preference');
      }
    };

    fetchGoogleUser();
  }, [accessToken, router, toast]);

  // Render your page
  return (
    <div className="w-screen h-screen">
      <h3>Redirecting</h3>
      <Spinner />
    </div>
  );
};

export default Success;
