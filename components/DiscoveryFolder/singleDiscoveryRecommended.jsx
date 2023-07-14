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


const SingleDiscoveryRecommended = ({recommendedJobs,fetchRecommended,isLoading}) => {
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
    const [recentJobs,setRecentJobs] = useState()
    const [showSubmit,setShowSubmit] = useState(true)
    const [showPaste,setShowPaste] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [showDialogue, setShowDialogue] = useState(false);

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

const handleOpenDialogue = () => {
  setShowDialogue(!showDialogue);
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

  const handleShowPaste = () => {
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
          {recommendedJobs.length === 0 && !isLoading ?(
            <p>No Recommended Jobs</p>
          ):(
            <>        
              {[...recommendedJobs].reverse().map((item) => (
                <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item.id}>
                <div className='type'>
                  <div className='recAd'>
                    <div className='recDirect'>{item.type + ' ad'}</div>
                    <div className='recDot' onClick={()=> setShowReport(!showReport)}>
                      <Image src={more} alt="more"/>
                      {showReport && (<ul ref={ref}>
                        <li onClick={handleShowReport}>Report this advert</li>
                        <li onClick={()=>handleAdRemoval(item.id)}>Remove from feed</li>
                      </ul>)}
                    </div>
                  </div>
                  <div className='reclink'>
                    <div className='stack'>
                      <p style={{fontWeight: 'bold', fontSize: '1.6rem'}}>{item.productName}</p>
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
                      {item.type === 'detail' || 'direct-link' ?(
                        <p className='recPara'>#25/Visitor</p>
                      ):(
                        <p className='recPara'>#50/Video</p>
                      )}
                    </div>
                    <div>
                      <div className='recAim'>
                        <Image src={cup} alt="cup"/>
                        <p>Aim</p>
                      </div>
                      {item.type === 'detail' || 'direct-link' ?(
                        <p className='recPara'>{item.target} Visitors</p>
                        ):(
                        <p className='recPara'>{item.target} Videos</p>
                      )}
                    </div>

                    <div>
                      <div className='recAim'>
                        <Image src={vector} alt="vector"/>
                        <p>Achieved</p>
                      </div>
                      {item.type === 'detail' || 'direct-link' ?(
                        <p className='recPara'>{item.conversions} Visitors</p>
                        ):(
                        <p className='recPara'>{item.conversions} Videos</p>
                      )}
                    </div>
                  </div>

                  {item.images.length === 0 ?(
                    <></>
                  ):(
                    <>
                      <div className='product-img-container'>
                        <div className='carousel-container'>
                          <div onClick={() => previousImage(item.images)} className='left-arrow'>
                              ❮
                          </div>
                          <div className='img-container' style={{borderRadius:'36px'}}>
                            <Image src={item.images[currentIndex]} alt='product' width={360} height={236}/>
                          </div>
                          <div onClick={() => nextImage(item.images)} className='right-arrow'>
                            ❯
                          </div>
                        </div>
                      </div>
                  
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
                      {item.images.length !==0 ? (
                        <div className='recIcons' onClick={() => handleDownload(item.images)}>
                          <Image src={download} alt=""/>
                        </div>
                      ):(
                        <div className='recIcons' onClick={()=>handleCopyLink(item.promotedLink)}>
                          <Image src={copyLink} alt=""/>
                        </div>
                      )}
                      <div className='recIcons' onClick={handleOpenDialogue}>
                        <Image src={exportLink} alt=""/>
                      </div>
                      <div className='recIcons' onClick={()=>handleJobSave(item.id)}>
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
