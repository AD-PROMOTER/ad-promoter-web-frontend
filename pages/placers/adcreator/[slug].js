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

const SingleAd = () => {
  const { adData } = useContext(SingleAdContext);
  const router = useRouter();
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

                {adData.images.length > 0 && (
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
                  <Link href={adData.promotedLink}>
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

          <div className="pause-btn">
            <Image src={Pause} alt="pause button" />
            <p>Pause Advert</p>
          </div>
        </SingleAdContainer>
      )}
    </>
  );
};

export default SingleAd;
