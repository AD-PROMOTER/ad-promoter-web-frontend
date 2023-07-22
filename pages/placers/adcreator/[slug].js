import { SingleAdContainer } from '@/styles/singleAd';
import React from 'react';
import UserTagBlue from '@/public/assets/user-tag-blue';
import Pause from '@/public/assets/pause.svg';
import Back from '@/public/assets/back.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import SingleAdContext from '@/context/singleAdContext';
import { useRouter } from 'next/router';
import { CiPlay1 } from 'react-icons/ci';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';

const SingleAd = () => {
  const {
    query: { id },
  } = useRouter();
  const { adData, setAdData } = useContext(SingleAdContext);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const handleSetAdId = async () => {
      const res = await fetch(`https://api.ad-promoter.com/api/v1/ads/${id}`);
      const data = await res.json();
      setAdData(data);
    };
    if (id) {
      handleSetAdId();
    }
  }, [id, setAdData]);

  const handlePause = async () => {
    const response = await fetch(
      `https://api.ad-promoter.com/api/v1/ads/update-status?id=${adData._id}&status=paused`,
      {
        method: 'PUT',
      }
    );
    const json = await response.json();

    if (!response.ok) {
      toast({
        title: json.msg,
        status: 'error',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }

    if (response.ok) {
      setAdData(json.data);
      toast({
        title: 'Ad Paused',
        status: 'success',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }
  };

  const handleResume = async () => {
    const response = await fetch(
      `https://api.ad-promoter.com/api/v1/ads/update-status?id=${adData._id}&status=incomplete`,
      {
        method: 'PUT',
      }
    );
    const json = await response.json();

    if (!response.ok) {
      toast({
        title: json.msg,
        status: 'error',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }

    if (response.ok) {
      setAdData(json.data);
      toast({
        title: 'Ad is now on',
        status: 'success',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }
  };
  return (
    <>
      {adData && (
        <SingleAdContainer>
          <div className="white-container">
            <div className="back" onClick={() => router.back()}>
              <Image src={Back} alt="back arrow" />
            </div>
            <h3>{adData.productName}</h3>
            <div className="white-container-body">
              <div className="dashboard">
                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Advert Type</h3>
                  </div>
                  <p>{adData.type}</p>
                </div>

                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Aim</h3>
                  </div>
                  <p>{adData.target} Conversions</p>
                </div>

                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Achieved</h3>
                  </div>
                  <p>{adData.conversions} Conversions</p>
                </div>

                <div className="ad-type">
                  <div className="head">
                    <UserTagBlue />
                    <h3>Price</h3>
                  </div>
                  {adData.type === 'detail' || 'direct-link' ? (
                    <p>#{adData.rate}/Visitor</p>
                  ) : (
                    <p>#{adData.rate}/Video</p>
                  )}
                </div>
              </div>

              <div className="desc">
                <div className="desc-item">
                  <h3>Product Description</h3>
                  <p>{adData.description}</p>
                </div>

                {adData.images?.length > 0 && (
                  <div className="desc-item">
                    <h3>Product Images</h3>
                    {adData.images.map((image) => (
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

                {adData.CTAButtonDesign && (
                  <div className="desc-item">
                    <h3>Conversion Button</h3>
                    <div className="btn">{adData.CTAButtonDesign}</div>
                  </div>
                )}

                <div className="desc-item">
                  <h3>Company Web Address</h3>
                  <Link href={adData.promotedLink ? adData.promotedLink : ''}>
                    <a>{adData.promotedLink}</a>
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
                  <p>₦{adData.budget}</p>
                </div>
              </div>
            </div>
          </div>

          {!adData.completed && (
            <>
              {adData.adStatus !== 'paused' ? (
                <div onClick={handlePause} className="pause-btn">
                  <Image src={Pause} alt="pause button" />
                  <p>Pause Advert</p>
                </div>
              ) : (
                <div onClick={handleResume} className="pause-btn">
                  <CiPlay1 color="#fff" size="24px" />
                  <p>Resume Advert</p>
                </div>
              )}
            </>
          )}
        </SingleAdContainer>
      )}
    </>
  );
};

export default SingleAd;
