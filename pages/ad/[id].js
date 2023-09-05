// pages/ad/[id].js
import { LandingPageContainer } from '@/styles/landingPageStyle';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserTagBlue from '@/public/assets/user-tag-blue';
import Link from 'next/link';
import { Spinner, useToast } from '@chakra-ui/react';
import Del from '@/public/assets/del.svg';

const AdPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { ref } = router.query;
  const [isAdFetchLoading, setIsAdFetchLoading] = useState(null);
  const [isAdCountLoading, setIsAdCountLoading] = useState(null);
  const [data, setData] = useState(null);
  // const [promotedLink, setPromotedLink] = useState('');
  const [token, setToken] = useState('');
  const toast = useToast();

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

  return (
    <>
      {data ? (
        <LandingPageContainer>
          <div className="container">
            <div className="header">
              <h1>{data.productName}</h1>
              {/* <Image src={Del} alt="del" /> */}
            </div>

            <div className="body">
              <div className="ad-banner">
                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Advert Type</h3>
                  </div>
                  <p>{data.type}</p>
                </div>

                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Aim</h3>
                  </div>
                  <p>{data.target} Conversions</p>
                </div>

                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Achieved</h3>
                  </div>
                  <p>{data.conversions} Conversions</p>
                </div>

                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Price</h3>
                  </div>
                  <p>{data.rate}/Conversion</p>
                </div>
              </div>

              <div className="desc">
                <div className="desc-item">
                  <h3>Product Description</h3>
                  <p>{data.description}</p>
                </div>

                {data.images.length > 0 && (
                  <div className="desc-item">
                    <h3>Product Images</h3>
                    {data.images.map((image) => (
                      <Image
                        key={image}
                        src={image}
                        alt=""
                        width={310.77}
                        height={156}
                      />
                    ))}
                  </div>
                )}

                {data.CTAButtonDesign && (
                  <div className="desc-item">
                    <h3>Conversion Button</h3>
                    <div
                      className="btn"
                      onClick={() => handleCountClick(data.promotedLink)}
                    >
                      {data.CTAButtonDesign}
                    </div>
                  </div>
                )}

                <div className="desc-item">
                  <h3>Company Web Address</h3>
                  <Link href={data.promotedLink}>
                    <a>{data.promotedLink}</a>
                  </Link>
                </div>

                {/* <div className="desc-item">
                  <h3>Nudity Awareness</h3>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>This advert contains adult content</p>
                  </div>
                </div> */}

                <div className="desc-item">
                  <h3>Total Advert Amount</h3>
                  <p>₦{data.budget}</p>
                </div>
              </div>
            </div>
          </div>
        </LandingPageContainer>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default AdPage;
