import React, {useState, useRef, useEffect} from 'react'
import { Feed } from './discovery.style'
import Image from 'next/image'
import more from '@/public/assets/ellipsis.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import archive from '@/public/assets/shareIcon1.svg'
import exportLink from '@/public/assets/bookmarkIcon1.svg'
import { directlinkAd } from './data'
import axios from 'axios'
import {CgProfile} from 'react-icons/cg'
import TimeAgo from '../timeAgo'
import linkFrame from '@/public/assets/linkframe.svg'


const SingleDiscoveryRecommended = ({click,isLoading,recommendedJobs}) => {
  const [showReport, setShowReport] = useState(false)
  const [showPaste, setShowPaste] = useState(false)
  const [showSubmit, setShowSubmit] = useState(true)
  const [inputValue, setInputValue] = useState('');
  const ref = useRef(null)
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
    // const linkToCopy = link
    // navigator.clipboard.writeText(link)
    // console.log(link);
  }

  return (
    <>
      {!recommendedJobs || isLoading ? (
        <p>Loading</p>
      ):(
        <>
          {recommendedJobs.length === 0 ?(
            <p>No Recommended Jobs</p>
          ):(
            <>        
              {[...recommendedJobs].reverse().map((item) => (
                <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item._id}>
                <div className='type'>
                  <div className='recAd'>
                    <div className='recDirect'>{item.type + ' ad'}</div>
                    <div className='recDot' onClick={()=> setShowReport(true)}>
                      {showReport ? (<ul ref={ref}>
                        <li onClick={click}>Report this advert</li>
                        <li>Remove from feed</li>
                      </ul>) : <Image src={more} alt="more"/>}
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
                      <div className='adImage'>
                        {item.images.map((image)=>(
                          <img src={image} key={image} width={311} height={156} alt="product image"/>
                        ))}
                      </div>
                  
                      <div className='recSubmit' ref={ref}>
                        {showSubmit && <button onClick={handleShowPaste}>Submit</button>}
                        {showPaste && (
                          <div>
                            <div className='recPaste'>
                              <div className='recPasteLink'>
                                <Image src={linkFrame} alt=""/>
                              </div>
                              <div className='recPasteButton'>
                                Paste
                              </div>
                              <input />
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  <div className='recTime'>
                    <div>
                      <div className='recUser'>
                        {item.creator.profilePicture?(
                          <img src={item.creator?.profilePicture} key={item._id} width={20} height={20} alt={item.creator.accountName}/>
                          ):(
                          <CgProfile width={20} height={20}/>
                        )}
                        <div>{item.creator.accountName}</div>
                      </div>
                      <p>Posted <TimeAgo dateTime={item.dateCreated}/></p>
                    </div>
                    <div className='recPost'>
                      <div className='recIcons'>
                        <Image src={download} alt=""/>
                      </div>
                      <div onClick={handleCopyLink(item.promotedLink)} className='recIcons'>
                        <Image src={exportLink} alt=""/>
                      </div>
                      <div className='recIcons'>
                        <Image src={archive} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </Feed>
              ))}
            </>      
          )}
        </>
      )}
    </>
  )
}

export default SingleDiscoveryRecommended
