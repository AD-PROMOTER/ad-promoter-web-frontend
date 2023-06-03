import React from 'react';
import { useRouter } from 'next/router';
import LandingPage from '../../components/LandingPage';

const DynamicLandingPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <LandingPage productName={slug} />;
};

export default DynamicLandingPage;
