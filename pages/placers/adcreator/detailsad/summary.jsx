import UserTagBlue from '@/public/assets/user-tag-blue'
import { StyledDirectLinkSummary } from '@/styles/placersCreator.styles'
import React from 'react'
import { useRouter } from 'next/router'
import Img1 from '@/public/assets/Component 20.jpg'
import Img2 from '@/public/assets/Component 21.jpg'
import Image from 'next/image'
const Summary = () => {
    const router = useRouter()
    const handlePush = () =>{
        router.push('success')
    }
  return (
    <StyledDirectLinkSummary>
        <div className="modal">
            <div className="head">
                <h4>Summary</h4>
                <p>Confirm all the details you have provided and click “Run Advert” to publish.</p>
            </div>
            <div className="ad-banner">
                <div className="product-name">
                    <div className="head">
                        <UserTagBlue />
                        <h3>Product Name</h3>
                    </div>
                    <p>Maxim cakes and pastery </p>
                </div>

                <div className="aim">
                    <div className="head">
                        <UserTagBlue />
                        <h3>Aim</h3>
                    </div>
                    <p>1000 Conversions </p>
                </div>

                <div className="price">
                    <div className="head">
                        <UserTagBlue />
                        <h3>Price</h3>
                    </div>
                    <p>₦50/Conversion</p>
                </div>
            </div>

            <div className="desc">
                <div className='description'>
                    <h4>Product Description</h4>
                    <p>At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.</p>
                </div>

                <div className="product-img">
                    <h4>Product Images</h4>
                    <div className="img-container">
                        <Image src={Img1} alt='product'/>
                        <Image src={Img2} alt='product'/>
                        {/* <Image src={Img1} alt='product'/> */}
                    </div>
                </div>
                
                <div className='web-address'>
                    <h4>Company web address</h4>
                    <p>www.idon’tknow.com</p>
                </div>
                <div className='amount'>
                    <h4>Ad amount</h4>
                    <p>₦1000</p>
                </div>
            </div>
        </div>

        <div className="btn" onClick={handlePush}>Run Advert</div>
    </StyledDirectLinkSummary>
  )
}

export default Summary