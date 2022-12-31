import { StyledDirectLink } from '@/styles/placersCreator.styles'
import React from 'react'
import CloseCircle from '@/public/assets/close-circle-2'
import LinkIcon from '@/public/assets/link-icon.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AdPlacerContext from '@/context/adPlacerContext'
import { useContext } from 'react'
const Directlink = () => {
    const router = useRouter()
    const {directLinkFormValue, setDirectLinkFormValue} = useContext(AdPlacerContext)
    const tags = [
        {
            tag: 'Foody'
        },
        {
            tag: 'Food'
        },
        {
            tag: 'Cake'
        },
        {
            tag: 'Chocolate'
        },
    ]

    const handlePush = () =>{
        router.push('directlink/conversion')
    }
    // 'Foody','Food','Cake','Chocolate'
  return (
    <StyledDirectLink>
        <div className="header">
            <div className="header-text">
                <h4>Details</h4>
                <h4>Conversion</h4>
                <h4>Payment</h4>
            </div>
            <div className="progress-bar">
                <div className='filled'>
                    <div className="num-border">
                        <div className='num'>
                            1
                        </div>
                    </div>
                    <div className='dash'></div>
                </div>
                <div className='empty'>
                    <div className='circle'></div>
                    <div className='dash'></div>
                </div>
                <div className='empty'>
                    <div className='circle'></div>
                </div>
            </div>
        </div>

        <div className="modal">
            <div className="modal-head">
                <h4>Creating a Directlink Advert</h4>
                <p>Kindly supply the following information.</p>
            </div>
            <form action="">
                <div className="product-name">
                    <label htmlFor="productName">1. What is your Product Name</label>
                    <input 
                        type="text" 
                        id="productName"
                        name='productName'
                        required
                        value={directLinkFormValue.productName}
                        // onChange={handleChange}
                        // className= 'input'
                    />
                </div>
                <div className="product-description">
                    <label htmlFor="productName"> 2. Give a brief product description or Advert copy</label>
                    <textarea 
                        name="productDescription" 
                        id="productDescription"
                        value={directLinkFormValue.productDescription}
                        />
                </div>

                <div className="product-tag">
                    <label htmlFor="poductTag">3. Project tags (Up to 5)</label>
                    <div className="tag-input">
                        <div className="tag-container">
                            {tags.map(({tag})=>(
                                <div className="tag">
                                    <h4>{tag}</h4>
                                    <div>
                                        <CloseCircle />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="product-link">
                    <label htmlFor="productLink">4. Paste a web address (where you want to direct your customers to)</label>
                    <div className="paste-input">
                        <div className="link-icon">
                            <Image src={LinkIcon} alt='link-icon'/>
                        </div>
                        <div className="input">
                            <input 
                                type="text" 
                                id="productLink"
                                name='productLink'
                                required
                                // value={userFormValue.email}
                                // onChange={handleChange}
                                // className= 'input'
                            />
                        </div>
                        <div className="button">
                            <p>paste</p>
                        </div>
                    </div>
                </div>

                <div className="product-content">
                    <label htmlFor="productContent">5. Content</label>
                    <div className="checkbox">
                        <input type="checkbox" name="productContent" id="productContent" />
                        <p>This advert contains adult content</p>
                    </div>
                </div>
            </form>
        </div>

        <div className="btns">
            <div className="prev">Prev</div>
            <div className="next" onClick={handlePush}>Next</div>
        </div>
    </StyledDirectLink>
  )
}

export default Directlink