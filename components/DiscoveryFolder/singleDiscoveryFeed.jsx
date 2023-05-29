import React, { useEffect, useRef, useState } from 'react'
import more from '@/public/assets/ellipsis.svg'
import vector from '@/public/assets/Vector.svg'
import cup from '@/public/assets/cupIcon.svg'
import currency from '@/public/assets/money-send.svg'
import download from '@/public/assets/downloadIcon3.svg'
import archive from '@/public/assets/shareIcon1.svg'
import exportLink from '@/public/assets/bookmarkIcon1.svg'
import { Feed } from './discovery.style'
import Image from 'next/image'
import { directlinkAd } from './data'
import TimeAgo from '../timeAgo'
import axios from 'axios'
import { CgProfile } from 'react-icons/cg'
import linkFrame from '@/public/assets/linkframe.svg'

const SingleDiscoveryFeed = ({click,isLoading,feed}) => {
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
                            <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item._id}>
                            <div className='type'>
                                <div className='more'>
                                    <div className='direct'>{item.type + ' ad'}</div>
                                    <div className='dot' onClick={()=> setShowReport(true)}>
                                        {showReport ? (<ul ref={ref}>
                                            <li onClick={click}>Report this advert</li>
                                            <li>Remove from feed</li>
                                        </ul>) : <Image src={more} alt="more"/>}
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
                                        <div className='icons'>
                                            <Image src={download} alt=""/>
                                        </div>
                                        <div className='icons'>
                                            <Image src={exportLink} alt=""/>
                                        </div>
                                        <div className='icons'>
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

export default SingleDiscoveryFeed
