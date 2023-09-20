/* eslint-disable react-hooks/exhaustive-deps */
  import React, {useState, useRef, useEffect} from 'react'
import { Feed } from './discovery.style'
import Image from 'next/image'
import more from '@/public/assets/ellipsis.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import exportLink from '@/public/assets/shareIcon1.svg'
import archive from '@/public/assets/bookmarkIcon1.svg'
import copyLink from '@/public/assets/bottom-link-icon.svg'
import axios from 'axios'
import {CgProfile} from 'react-icons/cg'
import TimeAgo from '../timeAgo'
import linkFrame from '@/public/assets/linkframe.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import arrowUp from '@/public/assets/arrow-up.svg'
import ShareDialogue from '../shareDialogue'
import { BackdropContainer, ModalContainer } from '../PromoterHomeAdDetail/styles'
import { Spinner, useToast } from '@chakra-ui/react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'


const SingleDiscoveryRecommended = ({recommendedJobs,fetchRecommended,isLoading}) => {
  const [showReport, setShowReport] = useState({})
    const toast = useToast()
    const ref = useRef(null)
    const token = useRef('')
    const [isReportLoading, setIsReportLoading] = useState(null);
    const [isReadMore, setIsReadMore] = useState(true);
    const [showReportModal,setShowReportModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')
    const [currentIndex,setCurrentIndex] = useState(0)
    const [recentJobs,setRecentJobs] = useState()
    const [showSubmit,setShowSubmit] = useState(true)
    const [showPaste,setShowPaste] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [showDialogue, setShowDialogue] = useState({});
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
},[])

const handleScroll = () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    !isLoading
  ) {
    fetchRecommended();
  }
};

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
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
const ClickedList = (e) =>{
  setListValue(e.target.innerText)
  setShowDropdown(false)
}
  const handleChange = (event) => {
    setInputValue(event.target.value);
};

const handleOpenDialogue = (itemId) => {
  setShowDialogue((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId]
  }));
};

  const handleShowPaste = () => {
    setShowSubmit(false)
    setShowPaste(true)
}

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
           fetchRecommended()
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
        toast({
        title: 'Link Submitted',
        status: "success",
        duration: "5000",
        isClosable: true,
        position: "bottom-left",
        size: "lg"
        });
        setInputValue('')
    }
}

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

  return (
        <>
          {recommendedJobs.length === 0 && !isLoading ?(
            <p>Your recommended adverts will appear here</p>
          ):(
            <>        
              {[...recommendedJobs].reverse().map((item) => (
                <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item.id}>
                <div className='type'>
                  <div className='recAd'>
                    <div className='recDirect'>{item.type + ' ad'}</div>
                    <div className='recDot' ref={(ref) => assignDropdownRef(item.id, ref)} onClick={() => toggleDropdown(item.id)}>
                      <div onClick={(e) => handleButtonClick(e, item.id)}>
                        <Image src={more} alt="more"/>
                      </div>
                      {showReport[item.id] && (<ul>
                        <li onClick={handleShowReport}>Report this advert</li>
                        <li onClick={()=>handleAdRemoval(item.id)}>Remove from feed</li>
                      </ul>)}
                    </div>
                  </div>
                  <div className='reclink'>
                    <div className='stack'>
                      <p style={{fontWeight: '600', fontSize: '1.6rem',color: '#2C2828'}}>{item.productName}</p>
                      <div className='recProfile'>
                        <p>Tags:</p>
                        {item.tags.map((tag, index) => (
                          <div className='recTag' key={index}>{tag}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='recProduct'>
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
                  <div className='recDesc'>
                    <div>
                      <div className='recAim'>
                        <Image src={currency} alt="currency"/>
                        <p>Price</p>
                      </div>
                      {item.type === 'detail' ? (
                        <p>₦50/Conversion</p>
                      ): item.type === 'direct-link'? (
                        <p>₦25/Visitor</p>
                      ):(
                        <p>₦5,000/Video</p>
                      )}
                    </div>
                    <div>
                      <div className='recAim'>
                        <Image src={cup} alt="cup"/>
                        <p>Aim</p>
                      </div>
                      {item.type === 'detail' ? (
                        <p>{item.target} Conversions</p>
                      ): item.type === 'direct-link'? (
                        <p>{item.target} Visitors</p>
                      ):(
                        <p>{item.target} Videos</p>
                      )}
                    </div>

                    <div>
                      <div className='recAim'>
                        <Image src={vector} alt="vector"/>
                        <p>Achieved</p>
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
                    <>
                      <div className='product-img-container'>
                        <div className='carousel-container'>
                          {item.images.length > 1 &&(
                            <div onClick={() => previousImage(item.images)} className='left-arrow' style={{width: '20px'}}>
                              <BsFillArrowLeftCircleFill />
                            </div>
                          )}
                          <div className='img-container' style={{borderRadius:'36px'}}>
                            <Image src={item.images[currentIndex]} alt='product' width={360} height={236}/>
                          </div>
                          {item.images.length > 1 &&(
                            <div onClick={() => nextImage(item.images)} className='right-arrow' style={{width: '20px'}}>
                              <BsFillArrowRightCircleFill />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {item.type === 'visual'&&(
                        <div className='recSubmit' ref={ref}>
                          {showSubmit && <button onClick={handleShowPaste}>Submit</button>}
                          {showPaste && (
                            <div>
                              <div className='recPaste'>
                                <div className='recPasteLink'>
                                  <Image src={linkFrame} alt=""/>
                                </div>
                                <div onClick={() => handleVisualSubmit(item.id,inputValue)} className='recPasteButton'>
                                  Submit
                                </div>
                                <input 
                                  type="text"
                                  id="inputValue"
                                  name="inputValue"
                                  onChange={(e)=>setInputValue(e.target.value)}
                                  value={inputValue}/>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  <div className='recTime'>
                    <div>
                      <div className='recUser'>
                        {item.creator?.profilePicture?(
                           <Image src={item.creator?.profilePicture} width={20} height={20} alt={item.creator.accountName}/>
                          ):(
                          <CgProfile width={20} height={20}/>
                        )}
                        <div>{item.creator?.accountName}</div>
                      </div>
                      <p>Posted <TimeAgo dateTime={item.dateCreated}/></p>
                    </div>
                    <div className='recPost'>
                      {item.type === 'visual' ? (
                        <div className='recIcons' onClick={() => handleDownload(item.images)}>
                          <Image src={download} alt=""/>
                        </div>
                      ):(
                        <div className='recIcons' onClick={()=>handleCopyLink(item.id)}>
                          <Image src={copyLink} alt=""/>
                        </div>
                      )}
                      <div className='recIcons' onClick={()=>handleOpenDialogue(item.id)}>
                        <Image src={exportLink} alt=""/>
                      </div>
                      <div className='recIcons' onClick={()=>handleJobSave(item.id)}>
                        <Image src={archive} alt=""/>
                      </div>
                    </div>
                  </div>
                  {showDialogue[item.id] && <ShareDialogue id={item.id}  />}
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
                </div>
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
  )
}

export default SingleDiscoveryRecommended
