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
import Image from 'next/image'
import { BackdropContainer, Feed, ModalContainer } from './style'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import axios from 'axios'
import { Spinner, useToast } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import TimeAgo from '../timeAgo'
import ShareDialogue from '../shareDialogue'
import linkFrame from '@/public/assets/linkframe.svg'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useContext } from 'react'
import JobsContext from '@/context/jobsContext'

const MobileDirect = ({sortStartDate,setSortStartDate,setSortEndDate,sortEndDate}) => {
    const [showReport, setShowReport] = useState({})
    const ref = useRef(null)
    const token = useRef('')
    const [isReadMore, setIsReadMore] = useState(true);
    const [showReportModal,setShowReportModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')
    const {savedJobs,setSavedJobs,isLoading,setIsLoading} = useContext(JobsContext)
    const [isReportLoading, setIsReportLoading] = useState(null);
    const [showSubmit,setShowSubmit] = useState(true)
    const [showPaste,setShowPaste] = useState(false)
    const [currentIndex,setCurrentIndex] = useState(0)
    const [inputValue, setInputValue] = useState('');
    const toast = useToast()
    const [showDialogue, setShowDialogue] = useState(false);
    const [page, setPage] = useState(1);
    const dropdownRefs = useRef({});

    useEffect(() => {
        const handleClickOutside = (event) => {
            for (const itemId in dropdownRefs.current) {
                if(showReport[itemId]){
                    setShowReport(false)
                }
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [showReport]);

    const assignDropdownRef = (itemId, ref) => {
        dropdownRefs.current[itemId] = ref;
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

    const ClickedList = (e) =>{
      setListValue(e.target.innerText)
      setShowDropdown(false)
    }
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    const fetchSavedJobs = async() =>{
        let apiUrl = `https://api.ad-promoter.com/api/v1/user/saved-jobs?page=${page}&pageSize=10`;
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
        // setSavedJobs((prevData) => [...prevData, ...result.data.data.data.data]);
        // setPage((prevPage) => prevPage + 1);
        setSavedJobs(result.data.data.data.data)
        setIsLoading(false)
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

    const handleDownload = (url) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'image.jpg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const handleCopyLink = async(id) => {
        try {
            const response = await fetch(
              `https://api.ad-promoter.com/api/v1/promotion/promote/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${token.current}`,
                },
              }
            );
            const data = await response.json();
      
            if(!response.ok){
              throw new Error(data.msg);
            }
            if (response.ok) {
                navigator.clipboard.writeText(`https://app.ad-promoter.com/ad/${id}?ref=${data.promotionRef}`)
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
                    // handleCountClick(data.promotionRef);
            }
        } catch (error) {
            console.error('Error fetching ad data:', error);
            toast({
              title: error.message, // Display the error message
              status: 'error',
              duration: 5000,
              isClosable: true,
              position: 'bottom-left',
            });
          }
        
    };
    const handleOpenDialogue = (itemId) => {
        setShowDialogue((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
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

    const handleShowPaste = () =>{
        setShowSubmit(false)
        setShowPaste(true)
    }

    const nextImage = (images) => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const previousImage = (images) => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const toggleDropdown = (itemId) => {
        setShowReport((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
      };
      
    const handleButtonClick = (event, itemId) => {
        // Prevent event propagation for the specific button
        event.stopPropagation();
        toggleDropdown(itemId); // Toggle the dropdown without affecting the global click event
    };

    const handleVisualSubmit = async (id,link) =>{
        const data = {
            adID: id,
            link: link
        };
        const response = await fetch(
            `https://api.ad-promoter.com/api/v1/promotion/visual`,
            {
              method: 'POST',
              headers: { 
                    Authorization: `Bearer ${token.current}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
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
            setInputValue('')
        }
        if (response.ok) {
            setInputValue('')
            toast({
            title: 'Link Submitted',
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
                {savedJobs.length === 0 && !isLoading ?(
                    <p>Your saved adverts will appear here</p>
                ):(
                    <>            
                        {[...savedJobs].reverse().map((item) => (
                            <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item.id}>
                                <div className="product-summary">
                                    <div className="product-summary-head">
                                        <div className="ad-type-container">
                                            <div className="adtype">{item.type}</div>
                                            <div className='dot' ref={(ref) => assignDropdownRef(item.id, ref)} onClick={() => toggleDropdown(item.id)}>
                                                <div onClick={(e) => handleButtonClick(e, item.id)}>
                                                    <Image src={more} alt="more"/>
                                                </div>
                                                {showReport[item.id] && (<ul>
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
                                            <></>
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
                                        {item.type === 'detail' ? (
                                            <p>₦50/Conversion</p>
                                        ): item.type === 'direct-link'? (
                                            <p>₦25/Visitor</p>
                                        ):(
                                            <p>₦5,000/Video</p>
                                        )}
                                    </div>
                                    <div className="aim">
                                        <div className="head">
                                            <Image src={cup} alt="cup"/>
                                            <h4>Aim</h4>
                                        </div>
                                        {item.type === 'detail' ? (
                                            <p>{item.target} Conversions</p>
                                        ): item.type === 'direct-link'? (
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
                                        {item.type === 'detail' ? (
                                            <p>{item.achieved} Conversions</p>
                                        ) : item.type === 'direct-link' ? (
                                            <p>{item.achieved} Visitors</p>
                                        ) : (
                                            <p>{item.achieved} Videos</p>
                                        )}
                                    </div>
                                </div>

                                {item.images.length === 0 ?(
                                    <></>
                                ):(
                                    <div className='submit-image-container'>
                                        <div className="product-img-container">
                                            <div className='carousel-container'>
                                                {item.images.length > 1 &&(
                                                    <div onClick={() => previousImage(item.images)} className='left-arrow'>
                                                        <BsFillArrowLeftCircleFill />
                                                    </div>
                                                )}
                                                <div className='img-container' style={{borderRadius:'36px'}}>
                                                    <Image src={item.images[currentIndex]} alt='product' width={360} height={236}/>
                                                </div>
                                                {item.images.length > 1 &&(
                                                    <div onClick={() => nextImage(item.images)} className='right-arrow'>
                                                        <BsFillArrowRightCircleFill />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {item.type === 'visual'&&(
                                            <div className='submit' ref={ref}>
                                                {showSubmit && <button  onClick={handleShowPaste}>Submit</button>}
                                                {showPaste && (
                                                    <form className='paste' onSubmit={(e)=>e.preventDefault()}>
                                                        <div className='pasteLink'>
                                                            <Image src={linkFrame} alt=""/>
                                                        </div>
                                                    
                                                            <button onClick={() => handleVisualSubmit(item.id,inputValue)} className='pasteButton'>
                                                                Submit
                                                            </button>

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
                                        )}
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
                                        {item.type === 'visual' ? (
                                            <div className='icons' onClick={() => handleDownload(item.images)}>
                                                <Image src={download} alt=""/>
                                            </div>
                                        ):(
                                            <div className='icons' onClick={()=>handleCopyLink(item.id)}>
                                                <Image src={copyLink} alt=""/>
                                            </div>
                                        )}
                                        <div className='icons' onClick={()=>handleOpenDialogue(item.id)}>
                                            <Image src={exportLink} alt=""/>
                                        </div>
                                        <div className='icons' onClick={()=>handleJobSave(item.id)}>
                                            <Image src={archive} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                {showDialogue[item.id] && <ShareDialogue id={item.id} />}
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
                {isLoading && <Spinner 
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#4F00CF'
                    size='xl'/>
                } 
            </>
        // )}
    // </>
  )
}

export default MobileDirect
