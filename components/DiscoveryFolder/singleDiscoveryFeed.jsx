import React, { useEffect, useRef, useState } from 'react'
import more from '@/public/assets/ellipsis.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import exportLink from '@/public/assets/shareIcon1.svg'
import archive from '@/public/assets/bookmarkIcon1.svg'
import copyLink from '@/public/assets/bottom-link-icon.svg'
import { Feed } from './discovery.style'
import Image from 'next/image'
import { directlinkAd } from './data'
import TimeAgo from '../timeAgo'
import axios from 'axios'
import { CgProfile } from 'react-icons/cg'
import linkFrame from '@/public/assets/linkframe.svg'
import { useToast } from '@chakra-ui/react'
import ShareDialogue from '../shareDialogue'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import { BackdropContainer, ModalContainer } from '../PromoterHomeAdDetail/styles'

const SingleDiscoveryFeed = ({isLoading,feed,fetchFeed}) => {
    const [showReport, setShowReport] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [showPaste, setShowPaste] = useState(false)
    const [showSubmit, setShowSubmit] = useState(true)
    const [inputValue, setInputValue] = useState('');
    const [isReportLoading, setIsReportLoading] = useState(null);
    const ref = useRef(null)
    const [isReadMore, setIsReadMore] = useState(true);
    const token = useRef('')
    const toast = useToast()
    const [currentIndex,setCurrentIndex] = useState(0)
    const [showDialogue, setShowDialogue] = useState(false);
    const [showReportModal,setShowReportModal] = useState(false)
    const [listValue, setListValue] = useState('It has gory images')

    useEffect(()=>{
        const userToken = JSON.parse(localStorage.getItem("user-token"));
        if (userToken) {
            token.current = userToken
        }
    },[])

  const handleOpenDialogue = () => {
    setShowDialogue(true);
  };

  const handleCloseDialogue = () => {
    setShowDialogue(false);
  };

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
 
  const ClickedList = (e) =>{
    setListValue(e.target.innerText)
    setShowDropdown(false)
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
         fetchFeed()
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

    const handleShowPaste = () => {
        setShowSubmit(false)
        setShowPaste(true)
    }

    const goToPrevious = () =>{
        feed.map(({images})=>{
            currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(images.length -1)
        })
    }

    const goToNext = () =>{
        feed.map(({images})=>{
            currentIndex <  images.length -1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0) 
        })
    }

    const handleShowReport = () =>{
        setShowReportModal(true)
        setShowReport(false)
    }

  return (
    <>
        {!feed || isLoading ? (
         <p>Loading</p>
        ):(
            <>
                {feed.length === 0 ?(
                    <p>Nothing in your feed</p>
                ):(
                    <>
                        {[...feed].reverse().map((item) => (
                            <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item.id}>
                            <div className='type'>
                                <div className='more'>
                                    <div className='direct'>{item.type + ' ad'}</div>
                                    <div className='dot' onClick={()=> setShowReport(!showReport)}>
                                        <Image src={more} alt="more"/>
                                        {showReport && (<ul ref={ref}>
                                            <li onClick={handleShowReport}>Report this advert</li>
                                            <li onClick={()=>handleAdRemoval(item.id)}>Remove from feed</li>
                                        </ul>)}
                                    </div>
                                </div>
                                <div className='adlink'>
                                    <div>
                                        <p style={{fontWeight: 'bold', fontSize: '1.6rem'}}>{item.productName}</p>
                                        <div className='profile'>
                                            <p>Tags:</p>
                                            {item.tags.map((tag, index) => (
                                                <div key={index} className='tag'>{tag}</div>
                                            ))}
                                    </div>
                                    </div>
                                </div>
                                <div className='product'>
                                    <p>
                                        {isReadMore ? item.description.slice(0, 156) : item.desc}
                                        {item.description.length > 156 ? (
                                            <span onClick={toggleReadMore}>
                                                {isReadMore ? " Read more" : " Show less"}
                                            </span>
                                        ):(
                                        <p></p>
                                        )}
                                    </p>
                                </div>
                                <div className='desc'>
                                    <div>
                                        <div className='aim'>
                                            <Image src={currency} alt="currency"/>
                                            <p>Price</p>
                                        </div>
                                        {item.type === 'detail' || 'direct-link' ?(
                                            <p className='para'>#25/Visitor</p>
                                        ):(
                                            <p className='para'>#50/Video</p>
                                        )}
                                    </div>

                                    <div>
                                        <div className='aim'>
                                            <Image src={cup} alt="cup"/>
                                            <p>Aim</p>
                                        </div>
                                        {item.type === 'detail' || 'direct-link' ?(
                                            <p className='para'>{item.target} Visitors</p>
                                            ):(
                                            <p className='para'>{item.target} Videos</p>
                                        )}
                                    </div>

                                    <div>
                                        <div className='aim'>
                                            <Image src={vector} alt="vector"/>
                                            <p>Achieved</p>
                                        </div>
                                        {item.type === 'detail' || 'direct-link' ?(
                                            <p className='para'>{item.conversions} Visitors</p>
                                        ):(
                                            <p className='para'>{item.conversions} Videos</p>
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

                                <div className='time'>
                                    <div>
                                        <div className='user'>
                                            {item.creator?.profilePicture?(
                                                <Image src={item.creator?.profilePicture} width={20} height={20} alt={item.creator.accountName}/>
                                            ):(
                                                <CgProfile width={20} height={20}/>
                                            )}
                                            <div>{item.creator?.accountName}</div>
                                        </div>
                                        <p>Posted <TimeAgo dateTime={item.dateCreated}/></p>
                                    </div>
                                    <div className='post'>
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

export default SingleDiscoveryFeed