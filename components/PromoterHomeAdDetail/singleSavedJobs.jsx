import React, { useEffect, useRef, useState } from 'react'
import more from '@/public/assets/ellipsis.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import exportLink from '@/public/assets/shareIcon1.svg'
import archive from '@/public/assets/bookmarkIcon1.svg'
import copyLink from '@/public/assets/bottom-link-icon.svg'
import { useToast } from '@chakra-ui/react'
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
import linkFrame from '@/public/assets/linkframe.svg'
import ShareDialogue from '../shareDialogue'

const SingleSavedJobs = () => {
    const [showReport, setShowReport] = useState(false)
    const ref = useRef(null)
    const token = useRef('')
    const [isReportLoading, setIsReportLoading] = useState(null);
    const [isReadMore, setIsReadMore] = useState(true);
    const [showReportModal,setShowReportModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')
    const [isLoading,setIsLoading] = useState(false)
    const [savedJobs,setSavedJobs] = useState()
    const [showSubmit,setShowSubmit] = useState(true)
    const [showPaste,setShowPaste] = useState(false)
    const [currentIndex,setCurrentIndex] = useState(0)
    const [inputValue, setInputValue] = useState('');
    const toast = useToast()
    const [showDialogue, setShowDialogue] = useState(false);

    const ClickedList = (e) =>{
      setListValue(e.target.innerText)
      setShowDropdown(false)
    }
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const handleOpenDialogue = () => {
        setShowDialogue(true);
    };
    
    const handleCloseDialogue = () => {
        setShowDialogue(false);
    };

    const handleJobSave = async(id) =>{
        const result = await axios(`https://api.ad-promoter.com/api/v1/user/save-job/${id}`,{
          headers:{
            Authorization: `Bearer ${token.current}`,
          },
          method: "PUT"
        })
        console.log(result.data)
        toast({
            title: result.data.data,
            status: result.data.success ? "success" : "error",
            duration: "5000",
            isClosable: true,
            position: "bottom-left",
            size: "lg"
        });
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleShowPaste = () =>{
        setShowSubmit(false)
        setShowPaste(true)
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

    const handleCopyLink = (link) => {
        navigator.clipboard.writeText(link)
          .then(() => {
            toast({
                title: 'Link copied to clipboard!',
                status: "success",
                duration: "5000",
                isClosable: true,
                position: "bottom-left",
                size: "lg"
            });
          })
          .catch((error) => {
            console.error('Failed to copy link:', error);
            toast({
                title: 'Failed to copy link:', error,
                status: "error",
                duration: "5000",
                isClosable: true,
                position: "bottom-left",
                size: "lg"
            });
          });
    };


    useEffect(()=>{
        const userToken = JSON.parse(localStorage.getItem("user-token"));
        if (userToken) {
            token.current = userToken
        }

        if(token.current){
            fetchSavedJobs()
        }
    },[])

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

    const handleShowReport = () =>{
        setShowReportModal(true)
        setShowReport(false)
    }

    const handleReport = async (id,report) =>{
        setIsReportLoading(true)
        const response = await fetch(
            'https://api.ad-promoter.com/api/v1/reports/create',
            {
              method: 'POST',
              headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${token.current}`
                },
              body: JSON.stringify({
                adsId: id,
                report: report
              }),
            }
          );
          const json = await response.json();
      
          if (!response.ok) {
            setIsReportLoading(false);
            setShowReportModal(false)
            toast({
                title: json.msg,
                status: "error",
                duration: "5000",
                isClosable: true,
                position: "bottom-left",
                size: "lg"
            });
          }
          if (response.ok) {
              setIsReportLoading(false);
              setShowReportModal(false)
              toast({
                title: json.msg,
                status: "success",
                duration: "5000",
                isClosable: true,
                position: "bottom-left",
                size: "lg"
            });
          }
        }

        const handleAdRemoval = async(id) =>{
            const response = await fetch(
                `https://api.ad-promoter.com/api/v1/ads/${id}`,
                {
                  method: 'DELETE',
                  headers: { 
                        Authorization: `Bearer ${token.current}`
                    },
                }
              );
              const json = await response.json();
          
              if (!response.ok) {
                    toast({
                        title: json.msg,
                        status: "error",
                        duration: "5000",
                        isClosable: true,
                        position: "bottom-left",
                        size: "lg"
                    });
                }
                if (response.ok) {
                    fetchSavedJobs()
                    toast({
                        title: json.msg,
                        status: "success",
                        duration: "5000",
                        isClosable: true,
                        position: "bottom-left",
                        size: "lg"
                    });
                }
        }

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
                    {[...savedJobs].reverse().map((item) => (
                        <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item.id}>
                            <div className="product-summary">
                                <div className="product-summary-head">
                                    <div className="ad-type-container">
                                        <div className="adtype">{item.type}</div>
                                        <div className='dot' onClick={()=> setShowReport(!showReport)}>
                                            <Image src={more} alt="more"/>
                                            {showReport && (<ul ref={ref}>
                                                <li onClick={handleShowReport}>Report this advert</li>
                                                <li onClick={()=>handleAdRemoval(item.id)}>Remove from feed</li>
                                            </ul>)}
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
                                        <div className="product-img-container">
                                            <div className='carousel-container'>
                                                <div onClick={goToPrevious} className='left-arrow'>
                                                    ❮
                                                </div>
                                                <div className='img-container' style={{borderRadius:'36px'}}>
                                                    <Image src={item.images[currentIndex]} alt='product' width={360} height={236}/>
                                                </div>
                                                <div onClick={goToNext} className='right-arrow'>
                                                    ❯
                                                </div>
                                            </div>
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
                                    {item.type === 'visual' ? (
                                            <div className='icons'>
                                                <Image src={download} alt=""/>
                                            </div>
                                        ):(
                                            <div className='icons' onClick={()=>handleCopyLink(item.promotedLink)}>
                                                <Image src={copyLink} alt=""/>
                                            </div>
                                        )}
                                        <div className='icons' onClick={handleOpenDialogue}>
                                            <Image src={exportLink} alt=""/>
                                        </div>
                                        <div className='icons' onClick={()=>handleJobSave(item.id)}>
                                            <Image src={archive} alt=""/>
                                        </div>
                                </div>
                            </div>
                            {showDialogue && <ShareDialogue shareUrl={'app.ad-promoter.com'} title={item.productName} imageUrl={item.images[0]} onClose={handleCloseDialogue} description={item.description} />}
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
                                        <div onClick={()=>handleReport(item.id,listValue)} className='reportButton'>
                                            <button>{isReportLoading ? 'Reporting..' : 'Send Report'}</button>
                                        </div>
                                    </ModalContainer>
                                </BackdropContainer>
                )}
                        </Feed>
                        
                    ))}
                </>
            )}
                
            </>
        )}
    </>
  )
}

export default SingleSavedJobs
