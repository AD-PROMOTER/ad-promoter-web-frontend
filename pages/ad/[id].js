// pages/ad/[id].js
import {
  LandingPageContainer,
  RedirectContainer,
} from '@/styles/landingPageStyle';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserTagBlue from '@/public/assets/user-tag-blue';
import Link from 'next/link';
import { Spinner, useToast } from '@chakra-ui/react';
import Bg from '@/public/assets/landing-bg.png';
import sign from '@/public/assets/sign.svg';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const AdPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { ref } = router.query;
  const [isAdFetchLoading, setIsAdFetchLoading] = useState(null);
  const [isAdCountLoading, setIsAdCountLoading] = useState(null);
  const [data, setData] = useState();
  const [token, setToken] = useState('');
  const toast = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (userToken) {
      setToken(userToken);

      if (id) {
        fetchData();
      }
    } else {
      router.push('/login');
    }
  }, [id, router]);

  const handleCountClick = async (promotedLink) => {
    setIsAdCountLoading(true);
    const response = await fetch(
      `https://api.ad-promoter.com/api/v1/ads/conversion/${ref}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await response.text();

    if (!response.ok) {
      setIsAdCountLoading(false);
      toast({
        title: error.message,
        status: 'error',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
      });
      throw new Error(`Failed to fetch data for ad ${id}`);
    }
    if (response.ok) {
      setIsAdCountLoading(false);
      if (promotedLink.startsWith('https://')) {
        router.push(promotedLink);
      } else {
        router.push(`https://${promotedLink}`);
      }
    }
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://api.ad-promoter.com/api/v1/ads/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await response.json();

    if (!response.ok) {
      toast({
        title: `Error fetching ad data: ${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
      });
      throw new Error(`Failed to fetch data for ad ${id}`);
    }

    if (response.ok) {
      if (res.type === 'detail') {
        setData(res);
        console.log(res);
      } else {
        handleCountClick(res.promotedLink);
      }
    }
  };

  const nextImage = (images) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = (images) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {data ? (
        <LandingPageContainer image={Bg}>
          <div className="modal">
            <h1>{data.productName}</h1>

            <div className="product-details">
              {data.images.length > 0 && (
                <div className="carousel-container">
                  {data.images.length > 1 && (
                    <div
                      onClick={() => previousImage(data.images)}
                      className="left-arrow"
                      style={{ width: '20px' }}
                    >
                      <BsFillArrowLeftCircleFill />
                    </div>
                  )}

                  <div className="img-container">
                    <Image
                      src={data.images[currentIndex]}
                      alt="product image"
                      width={456.223}
                      height={229.013}
                      style={{ borderRadius: '21.639px' }}
                    />
                  </div>

                  {data.images.length > 1 && (
                    <div
                      onClick={() => previousImage(data.images)}
                      className="right-arrow"
                      style={{ width: '20px' }}
                    >
                      <BsFillArrowRightCircleFill />
                    </div>
                  )}
                </div>
              )}

              <div className="product-description">
                <h3>Product description:</h3>
                <p>{data.description}</p>
              </div>
            </div>

            <button onClick={() => handleCountClick(data.promotedLink)}>
              {isAdCountLoading ? <Spinner /> : data.CTAButtonDesign}
            </button>

            <div className="sign-container">
              <div className="sign">
                <Image src={sign} alt="ad-promototer logo" />
                <p>Powered by AD-Promoter</p>
              </div>
            </div>
          </div>
        </LandingPageContainer>
      ) : (
        <RedirectContainer>
          <p>You are being redirected please kindly wait</p>
          <Spinner />
        </RedirectContainer>
      )}
    </>
  );
};

export default AdPage;
