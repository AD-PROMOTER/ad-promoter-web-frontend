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
// import { directlinkAd } from '@/components/DiscoveryFolder/data'
import { BackdropContainer, Feed, ModalContainer } from './styles'
import { directlinkAd } from './data'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import axios from 'axios'
import { CgProfile } from 'react-icons/cg'
import TimeAgo from '../timeAgo'

const SingleSavedJobs = () => {
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
            const result = await axios(`https://api.ad-promoter.com/api/v1/user/saved-jobs`,{
              headers:{
                Authorization: `Bearer ${token.current}`
              }
            })
            setSavedJobs(result.data.data.data.data)
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
                    {savedJobs.map((item) => (
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
                                    )}                                </div>
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
                                    <>
                                        <div className='adImage'>
                                            {item.images.map((image)=>(
                                                <Image key={image} src={image} width={50} height={50} alt="product image"/>
                                            ))}
                                        </div>
                                        <div className='submit' ref={ref}>
                                            {showSubmit && <button onClick={handleShowPaste}>Submit</button>}
                                            {showPaste && (
                                                <form className='paste'>
                                                    <div className='pasteLink'>
                                                        <Image src={linkFrame} alt=""/>
                                                    </div>
                                                    {inputValue === '' ? (
                                                        <button className='pasteButton'>
                                                            Paste
                                                        </button>
                                                    ):(
                                                        <button className='pasteButton'>
                                                            Submit
                                                        </button>
                                                    )}
                                                    <input 
                                                        type="text"
                                                        id="inputValue"
                                                        name="inputValue"
                                                        onChange={handleChange}
                                                        value={inputValue}
                                                    />
                                                </form>
                                            )}
                                        </div>
                                    </>
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
                                    <Image src={archive} alt='archive'/>
                                </div>
                            </div>
                        </Feed>
                    ))}
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
        )}
    </>
  )
}

export default SingleSavedJobs
