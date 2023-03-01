import React, { useEffect, useRef, useState } from 'react'
import more from '@/public/assets/ellipsis.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import remove from '@/public/assets/remove.svg'
import info from '@/public/assets/info-circle.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import archive from '@/public/assets/shareIcon1.svg'
import exportLink from '@/public/assets/bookmarkIcon1.svg'
// import { Feed } from '@/components/DiscoveryFolder/discovery.style'
import Image from 'next/image'
import Copy from '@/public/assets/copy-icon'
// import { directlinkAd } from '@/components/DiscoveryFolder/data'
import { BackdropContainer, Feed, ModalContainer } from './style'
import { detailsAd, directlinkAd, visualAd } from '../PromoterHomeAdDetail/data'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'

const MobileDetailed = () => {
    const [showReport, setShowReport] = useState(false)
    const ref = useRef(null)
    const [isReadMore, setIsReadMore] = useState(true);
    const [showReportModal,setShowReportModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')
    const [currentIndex,setCurrentIndex] = useState(0)
    
    const ClickedList = (e) =>{
      setListValue(e.target.innerText)
      setShowDropdown(false)
    }

    const goToPrevious = () =>{
        visualAd.map(({productImg})=>{
            currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(productImg.length -1)
        })
    }

    const goToNext = () =>{
        visualAd.map(({productImg})=>{
            currentIndex <  productImg.length -1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0) 
        })
    }

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    useEffect(() => {
        const onClickOutside = () => {
            setShowReport(false)
        }
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        }
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, [])

  return (
    <>
        {detailsAd.map((item, index) => (
            <Feed bg='#FBBC05' key={index}>
                <div className="product-summary">
                    <div className="product-summary-head">
                        <div className="ad-type-container">
                            <div className="adtype">{item.type}</div>
                            <div className='dot' onClick={()=> setShowReport(true)}>
                                {showReport ? (<ul ref={ref}>
                                    <li onClick={()=>setShowReportModal(true)}>
                                        <Image src={info} alt='info'/>
                                        <p>Report this advert</p>
                                    </li>
                                    <li>
                                        <Image src={remove} alt='delete'/>
                                        <p>Remove from feed</p>
                                    </li>
                                </ul>) : <Image src={more} alt="more"/>}
                            </div>
                        </div>
                        <div className="business-name-container">
                            <h3>{item.product}</h3>
                            <div className="tag-container">
                                <p>Tags:</p>
                                <div className="tag">
                                    {item.tags.map((tag, index) => (
                                        <div key={index}>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-summary-text">
                        <p>
                            {isReadMore ? item.desc.slice(0, 156) : item.desc}
                            {item.desc.length > 156 ? (
                                <span onClick={toggleReadMore}>
                                    {isReadMore ? " Read more" : " Show less"}
                                </span>
                            ):(
                            <p></p>
                            )}
                        </p>
                    </div>
                </div>

                <div className="product-plan">
                    <div className="price">
                        <div className="head">
                            <Image src={currency} alt="currency"/>
                            <h4>Price</h4>
                        </div>
                        <p>{item.price}</p>
                    </div>
                    <div className="aim">
                        <div className="head">
                            <Image src={cup} alt="cup"/>
                            <h4>Aim</h4>
                        </div>
                        <p>{item.aim}</p>
                    </div>
                    <div className="achieved">
                        <div className="head">
                            <Image src={vector} alt="vector"/>
                            <h4>Achieved</h4>
                        </div>
                        <p>{item.achieved}</p>
                    </div>
                </div>

                <div className="product-img-container">
                    <div className='carousel-container'>
                        <div onClick={goToPrevious} className='left-arrow'>
                            ❮
                        </div>
                        <div className='img-container'>
                            <Image src={item.productImg[currentIndex].url} alt='product'/>
                        </div>
                        <div onClick={goToNext} className='right-arrow'>
                            ❯
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="user-details">
                        <div className="user-details-text">
                            <Image src={item.userImg} alt='user'/>
                            <h5>{item.userName}</h5>
                        </div>
                        <p>{item.timePosted}</p>
                    </div>
                    <div className="share-container">
                        <Image src={exportLink} alt='export'/>
                        <Image src={download} alt='download'/>
                        <Image src={archive} alt='archieve'/>
                    </div>
                </div>
            </Feed>
        ))}

        {showReportModal && (
            <BackdropContainer onClick={()=>setShowReportModal(false)}>
                <ModalContainer onClick={e => e.stopPropagation()}>
                    <div className='report'>
                        <p className='advert'>Report Advert</p>
                        <p className='reason'>Tell us why you want to report this advert?</p>
                    </div>
                    <div className='language'>Why are you reporting this advert</div>
                    <div className="input-container">
                        <div className='inputArea' onClick={() => setShowDropdown(!showDropdown)}>
                            <div className='inputText'>{listValue}</div>
                            {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
                        </div>
                        {showDropdown && (
                            <ul>
                                <li onClick={ClickedList}>It has gory images</li>
                                <li onClick={ClickedList}>It is a scam advert</li>
                                <li onClick={ClickedList}>It has nudity or sexual content</li>
                                <li onClick={ClickedList}>Other reasons</li>
                            </ul>
                        )}
                    </div>
                    <div className='reportButton'>
                        <button>Send Report</button>
                    </div>
                </ModalContainer>
            </BackdropContainer>
        )}
    </>
  )
}

export default MobileDetailed;
