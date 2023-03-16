import { ModalBackground, StyledDirectLink } from '@/styles/placersCreator.styles'
import React, { useEffect, useRef, useState } from 'react'
import CloseCircle from '@/public/assets/close-circle-2'
import LinkIcon from '@/public/assets/link-icon.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AdPlacerContext from '@/context/adPlacerContext'
import { useContext } from 'react'
import ArrowDown from '@/public/assets/arrow-down'
import CloudPlus from '@/public/assets/cloud-plus'
import { useImageUpload } from '@/hooks/useImageUpload'
const Detailsad = () => {
    const router = useRouter()
    const {productName,setProductName,productDescription,setProductDescription,tags,setTags,webAddress,setWebAddress,setContainAdultContent,images,setImages,imageURLs,setImageURLs,cta,setCta} = useContext(AdPlacerContext)
    const [tagValue,setTagValue] = useState('');
    const [isDropdownClicked,setIsDropdownClicked] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const [token,setToken] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const {imageUpload} = useImageUpload()

    useEffect(()=>{
        const userRole = JSON.parse(localStorage.getItem("token"));
        if (userRole) {
        setToken(userRole.token);
        }
        setCta('Select a conversion button')
    })

    const ClickedList = (e) =>{
        setCta(e.target.innerText)
        setIsDropdownClicked(false)
    }

    const handleDropdown = () =>{
        setIsDropdownClicked(!isDropdownClicked)
    }
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(tagValue){
                setTags(prevTags => [...prevTags, tagValue]);
                setTagValue('')
            }
        }
    };

    const deleteTag = index => {
        setTags(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
    }

    const handlePush = () =>{
        if(productName&&productDescription&&webAddress !== ''){
            router.push('detailsad/conversion')
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files)
    }

    const fileUploadHandler = (e) =>{
        e.preventDefault()   
       const formData = new FormData()
       formData.append('selectedFile',selectedFile)
        imageUpload(selectedFile.name)
        console.log(selectedFile);
    }
    
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
                <h4>Creating a Details Advert</h4>
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
                        value={productName}
                        onChange={(e)=>setProductName(e.target.value)}
                    />
                </div>
                <div className="product-description">
                    <label htmlFor="productName"> 2. Give a brief product description or Advert copy</label>
                    <textarea 
                        name="productDescription" 
                        id="productDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        />
                </div>

                <div className="upload">
                    <label htmlFor="upload"> 3. Upload Product images (Up to 5)</label>
                    <div className="upload-container">
                        <div className="text-container">
                            <CloudPlus />
                            <p>Drop files to upload or <span onClick={() => setShowModal(true)}>browse</span></p>  
                        </div>
                        <div>
                            {imageURLs.map(imageSrc => <Image key={imageSrc} src={imageSrc} alt='imageSrc' width={20} height={20}/>)}
                            {/* <span>&times;</span> */}
                        </div>
                    </div>
                </div>

                <div className="product-tag">
                    <label htmlFor="poductTag">4. Project tags (Up to 5)</label>
                    <div className="tag-input">
                        <div className="tag-container">
                            {tags.map((tag,index)=>(
                                <div className="tag" key={index}>
                                    <h4>{tag}</h4>
                                    <div onClick={()=> deleteTag(index)}>
                                        <CloseCircle />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <input 
                            type="text"
                            value={tagValue}
                            onChange={(e)=>setTagValue(e.target.value)}
                            onKeyDown={handleKeyDown} 
                        />
                    </div>
                </div>

                <div className="product-link">
                    <label htmlFor="productLink">5. Paste a web address (where you want to direct your customers to)</label>
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
                                value={webAddress}
                                onChange={(e)=>setWebAddress(e.target.value)}
                            />
                        </div>
                        <div className="button">
                            <p>paste</p>
                        </div>
                    </div>
                </div>

                <div className="product-cta">
                    <label htmlFor="productCta">6. Select an appropriate call to action (CTA Button) for your advert.</label>
                    <div onClick={handleDropdown} name="cta" id="cta" className='cta' onChange={(e) => setCta(e.target.value)}>
                        <p>{cta}</p>
                        <ArrowDown />
                    </div>
                    {isDropdownClicked && (
                        <ul>
                            <li onClick={ClickedList}> Buy now</li>
                            <li onClick={ClickedList}> Contact us</li>
                            <li onClick={ClickedList}> Visit our website</li>
                            <li onClick={ClickedList}> Call us</li>
                            <li onClick={ClickedList}> Find out more</li>
                            <li onClick={ClickedList}> Sign me up</li>
                        </ul>
                    )}
                    
                </div>

                <div className="product-content">
                    <label htmlFor="productContent">7. Content</label>
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            name="productContent" 
                            id="productContent" 
                            onChange={(e) =>setContainAdultContent(e.target.checked)}/>
                        <p>This advert contains adult content</p>
                    </div>
                </div>
            </form>
        </div>

        <div className="btns">
            <div className="prev">Prev</div>
            <div className="next" onClick={handlePush}>Next</div>
        </div>

        {showModal&&(
            <ModalBackground onClick={() => setShowModal(false)}>
                <div onClick={(e)=> e.stopPropagation()} className='file-modal'>
                    <form onSubmit={fileUploadHandler}>
                        <input 
                            type="file" 
                            onChange={handleFileSelect}
                        />
                        <button>Upload</button>
                    </form>
                </div>
            </ModalBackground>
        )}
    </StyledDirectLink>
  )
}

export default Detailsad