/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import more from '@/public/assets/ellipsis.svg'
import info from '@/public/assets/info-circle.svg'
import remove from '@/public/assets/remove.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import exportLink from '@/public/assets/shareIcon1.svg'
import archive from '@/public/assets/bookmarkIcon1.svg'
import copyLink from '@/public/assets/bottom-link-icon.svg'
// import { Feed } from '@/components/DiscoveryFolder/discovery.style'
import Image from 'next/image'
import Copy from '@/public/assets/copy-icon'
// import { directlinkAd } from '@/components/DiscoveryFolder/data'
import { BackdropContainer, Feed, ModalContainer } from './style'
import { directlinkAd, visualAd } from '../PromoterHomeAdDetail/data'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import TimeAgo from '../timeAgo'
import { Spinner, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { CgProfile } from 'react-icons/cg'
import ShareDialogue from '../shareDialogue'
import linkFrame from '@/public/assets/linkframe.svg'

const MobileRecentPromoters = ({sortStartDate,setSortStartDate,setSortEndDate,sortEndDate}) => {
    const [showReport, setShowReport] = useState(false)
    const toast = useToast()
    const ref = useRef(null)
    const token = useRef('')
    const [isReportLoading, setIsReportLoading] = useState(null);
    const [isReadMore, setIsReadMore] = useState(true);
    const [showReportModal,setShowReportModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')
    const [currentIndex,setCurrentIndex] = useState(0)
    const [isLoading,setIsLoading] = useState(false)
    const [recentJobs,setRecentJobs] = useState([])
    const [showSubmit,setShowSubmit] = useState(true)
    const [showPaste,setShowPaste] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [showDialogue, setShowDialogue] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const userToken = JSON.parse(localStorage.getItem("user-token"));
        if (userToken) {
            token.current = userToken
        }

        if(token.current){
            fetchRecentJobs()
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const fetchRecentJobs = async() =>{
        let apiUrl = `https://api.ad-promoter.com/api/v1/ads/recent-ads?page=${page}&pageSize=10`;
        if (sortStartDate) {
          apiUrl += `&startDate=${sortStartDate}`;
        }
        if (sortEndDate) {
          apiUrl += `&endDate=${sortEndDate}`;
        }
        setIsLoading(true)
        const result = await axios(apiUrl,{
          headers:{
            Authorization: `Bearer ${token.current}`
          }
        })
        setRecentJobs((prevData) => [...prevData, ...result.data.data.data]);
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false)
    }

    const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight &&
          !isLoading
        ) {
          fetchRecentJobs();
        }
    };
    

    const ClickedList = (e) =>{
      setListValue(e.target.innerText)
      setShowDropdown(false)
    }

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

    const handleOpenDialogue = () => {
        setShowDialogue(!showDialogue);
    };
    

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

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

  
    const togglePaste = () =>{
        setShowSubmit(false)
        setShowPaste(true)
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

        const handleShowReport = () =>{
            setShowReportModal(true)
            setShowReport(false)
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
                 fetchRecentJobs()
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

        const handleDownload = async (imageLinks) => {
            try {
              for (let i = 0; i < imageLinks.length; i++) {
                const imageUrl = imageLinks[i];
                const filename = `image${i + 1}`;
        
                const response = await fetch('/api/convert-to-jpeg', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ imageUrl, filename })
                });
        
                const blob = await response.blob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `${filename}.jpg`;
                link.click();
                URL.revokeObjectURL(link.href);
              }
            } catch (error) {
              console.error('Error downloading images:', error);
            }
        };

        const handleVisualSubmit = async (id,link) =>{
            const response = await fetch(
                `https://api.ad-promoter.com/api/v1/promotion/visual`,
                {
                  method: 'POST',
                  headers: { 
                        Authorization: `Bearer ${token.current}`
                    },
                    body: JSON.stringify({
                        adID: id,
                        link: link
                    })
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
        {recentJobs.length === 0 && isLoading ? (
            <Spinner 
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#4F00CF'
            size='xl'
            />
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
                                            <div className='dot' onClick={()=> setShowReport(!showReport)}>
                                                {showReport ? (<ul ref={ref}>
                                                    <li onClick={handleShowReport}>
                                                        <Image src={info} alt='info'/>
                                                        <p>Report this advert</p>
                                                    </li>
                                                    <li onClick={()=>handleAdRemoval(item.id)}>
                                                        <Image src={remove} alt='remove'/>
                                                        <p>Remove from feed</p>
                                                    </li>
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
                                    <div className='submit-image-container'>                                    
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
        
                                        {/* {item.type === 'visual'}{} */}
                                        <div className='submit' ref={ref}>
                                            {showSubmit && <button className='btn' onClick={togglePaste}>Submit</button>}
                                            {showPaste && (
                                                <form className='paste' onSubmit={(e)=>e.preventDefault()}>
                                                    <div className='pasteLink'>
                                                        <Image src={linkFrame} alt=""/>
                                                    </div>
                                                    <input 
                                                        type="text"
                                                        id="inputValue"
                                                        name="inputValue"
                                                        onChange={(e)=>setInputValue(e.target.value)}
                                                        value={inputValue}
                                                    />
                                                    <button onClick={() => handleVisualSubmit(item.id,inputValue)} className='pasteButton'>
                                                        Submit
                                                    </button>
                                                    
                                                </form>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="bottom">
                                    <div className="user-details">
                                        <div className="user-details-text">
                                            {item.creator?.profilePicture?(
                                                <Image src={item.creator?.profilePicture} width={20} height={20} alt={item.creator.accountName}/>
                                            ):(
                                                <CgProfile width={20} height={20}/>
                                            )}
                                            <h5>{item.creator?.accountName}</h5>
                                        </div>
                                        <p>Posted <TimeAgo dateTime={item.dateCreated}/></p>
                                    </div>
                                    <div className="share-container">
                                        {item.images.length !==0 ? (
                                            <div className='icons' onClick={() => handleDownload(item.images)}>
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
                                {showDialogue && <ShareDialogue shareLink={item.promotedLink}  />}
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

export default MobileRecentPromoters;