import React, { useEffect, useRef, useState } from 'react'
import more from '@/public/assets/ellipsis.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import archive from '@/public/assets/shareIcon1.svg'
import exportLink from '@/public/assets/bookmarkIcon1.svg'
// import { Feed } from '@/components/DiscoveryFolder/discovery.style'
import Image from 'next/image'
import Copy from '@/public/assets/copy-icon'
// import { directlinkAd } from '@/components/DiscoveryFolder/data'
import { BackdropContainer, Feed, ModalContainer } from './styles'
import { detailsAd, directlinkAd, visualAd } from './data'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import axios from 'axios'
import { CgProfile } from 'react-icons/cg'
import TimeAgo from '../timeAgo'

const SingleRecentJob = () => {
    const [showReport, setShowReport] = useState(false)
    const ref = useRef(null)
    const token = useRef('')
    const [isReadMore, setIsReadMore] = useState(true);
    const [showReportModal,setShowReportModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')
    const [currentIndex,setCurrentIndex] = useState(0)
    const [recentJobs,setRecentJobs] = useState()
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        const userToken = JSON.parse(localStorage.getItem("user-token"));
        if (userToken) {
            token.current = userToken
        }

        const fetchRecentJobs = async() =>{
            setIsLoading(true)
            const result = await axios(`https://api.ad-promoter.com/api/v1/ads/recent-ads?page=1&pageSize=10`,{
              headers:{
                Authorization: `Bearer ${token.current}`
              }
            })
            setRecentJobs(result.data.data.data)
            setIsLoading(false)
        }
        if(token.current){
            fetchRecentJobs()
        }
    },[])

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
        {!recentJobs || isLoading ? (
            <p>Loading...</p>
        ):(
            <>
                {recentJobs.length === 0 ?(
                    <p>No Recent Job</p>
                ):(
                    <>            
                        {recentJobs.map((item) => (
                            <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item._id}>
                                <div className="product-summary">
                                    <div className="product-summary-head">
                                        <div className="ad-type-container">
                                            <div className="adtype">{item.type}</div>
                                            <div className='dot' onClick={()=> setShowReport(true)}>
                                                {showReport ? (<ul ref={ref}>
                                                    <li onClick={()=>setShowReportModal(true)}>Report this advert</li>
                                                    <li>Remove from feed</li>
                                                </ul>) : <Image src={more} alt="more"/>}
                                            </div>
                                        </div>
                                        <div className="business-name-container">
                                            <h3>{item.productName}</h3>
                                            <div className="tag-container">
                                                <p>Tags:</p>
                                                <div className="tag">
                                                    {item.tags.map((tag) => (
                                                        <div key={tag}>{tag}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-summary-text">
                                        <p>
                                            {isReadMore ? item.description.slice(0, 156) : item.description}
                                            {item.description.length > 156 ? (
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
                                        {item.type === 'detail' || 'direct-link' ?(
                                            <p>#25/Visitor</p>
                                        ):(
                                            <p>#50/Video</p>
                                        )}
                                    </div>
                                    <div className="aim">
                                        <div className="head">
                                            <Image src={cup} alt="cup"/>
                                            <h4>Aim</h4>
                                        </div>
                                        {item.type === 'detail' || 'direct-link' ?(
                                            <p>{item.target} Visitors</p>
                                        ):(
                                            <p>{item.target} Videos</p>
                                        )}  
                                    </div>
                                    <div className="achieved">
                                        <div className="head">
                                            <Image src={vector} alt="vector"/>
                                            <h4>Achieved</h4>
                                        </div>
                                        {item.type === 'detail' || 'direct-link' ?(
                                            <p>{item.conversions} Visitors</p>
                                        ):(
                                            <p>{item.conversions} Videos</p>
                                        )}
                                    </div>
                                </div>
                                
                                {item.images.length === 0 ?(
                                    <></>
                                ):(
                                    <div className="product-img-container">
                                        <div className='carousel-container'>
                                            <div onClick={goToPrevious} className='left-arrow'>
                                                ❮
                                            </div>
                                            <div className='img-container'>
                                                <Image src={item.images[currentIndex]} alt='product'/>
                                            </div>
                                            <div onClick={goToNext} className='right-arrow'>
                                                ❯
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="bottom">
                                    <div className="user-details">
                                        <div className="user-details-text">
                                            {item.creator.profilePicture?(
                                                <Image src={item.creator?.profilePicture} width={20} height={20} alt={item.creator.accountName}/>
                                            ):(
                                                <CgProfile width={20} height={20}/>
                                            )}
                                            <h5>{item.creator.accountName}</h5>
                                        </div>
                                        <p>Posted <TimeAgo dateTime={item.dateCreated}/></p>
                                    </div>
                                    <div className="share-container">
                                        <Image src={exportLink} alt='export'/>
                                        <Image src={download} alt='download'/>
                                        <Image src={archive} alt='archieve'/>
                                    </div>
                                </div>
                            </Feed>
                        ))}
                    </>
                )}            
            </>
        )}

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

export default SingleRecentJob;
