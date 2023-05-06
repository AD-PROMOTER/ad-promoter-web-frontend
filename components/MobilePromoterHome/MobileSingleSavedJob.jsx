import React, { useEffect, useRef, useState } from 'react'
import more from '@/public/assets/ellipsis.svg'
import info from '@/public/assets/info-circle.svg'
import remove from '@/public/assets/remove.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import archive from '@/public/assets/shareIcon1.svg'
import exportLink from '@/public/assets/bookmarkIcon1.svg'
// import { Feed } from '@/components/DiscoveryFolder/discovery.style'
import Image from 'next/image'
// import { directlinkAd } from '@/components/DiscoveryFolder/data'
import { BackdropContainer, Feed, ModalContainer } from './style'
import { directlinkAd } from '../PromoterHomeAdDetail/data'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import axios from 'axios'

const MobileDirect = () => {
    const [showReport, setShowReport] = useState(false)
    const ref = useRef(null)
    const token = useRef('')
    const [isReadMore, setIsReadMore] = useState(true);
    const [showReportModal,setShowReportModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')
    const [isLoading,setIsLoading] = useState(false)
    const [savedJobs,setSavedJobs] = useState()

    const ClickedList = (e) =>{
      setListValue(e.target.innerText)
      setShowDropdown(false)
    }
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    useEffect(()=>{
        const userToken = JSON.parse(localStorage.getItem("user-token"));
        if (userToken) {
            token.current = userToken
        }

        const fetchSavedJobs = async() =>{
            setIsLoading(true)
            const result = await axios(`http://35.153.52.116/api/v1/user/saved-jobs`,{
              headers:{
                Authorization: `Bearer ${token.current}`
              }
            })
            setSavedJobs(result.data.data)
            setIsLoading(false)
        }
        if(token.current){
            fetchSavedJobs()
        }
    },[])

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
         {!savedJobs || isLoading ? (
            <p>Loading...</p>
        ):(
            <>
                {savedJobs.length === 0 ?(
                    <p>No saved job</p>
                ):(
                    <>            
                        {directlinkAd.map((item, index) => (
                            <Feed bg='#0594FB' key={index}>
                                <div className="product-summary">
                                    <div className="product-summary-head">
                                        <div className="ad-type-container">
                                            <div className="adtype">{item.type}</div>
                                            <div className='dot' onClick={()=> setShowReport(true)}>
                                                {showReport ? (<ul ref={ref}>
                                                    <li onClick={()=>setShowReportModal(true)}>
                                                        <Image src={info} alt="info"/>
                                                        <p>Report this advert</p>
                                                    </li>
                                                    <li>
                                                        <Image src={remove} alt='remove'/>
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
                                        <Image src={archive} alt='archive'/>
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

export default MobileDirect
