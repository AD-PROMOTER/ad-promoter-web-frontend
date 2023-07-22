import React, { useEffect } from 'react'
import Image from "next/image"
import back from '@/public/assets/back-icon.svg'
import image from '@/public/assets/Ellipse 3.svg'
import { NotificationStyle } from './style'
import { Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import NotificationEmptyScreen from '../notificationEmptyScreen'

const Index = ({goBack}) => {
  const [isLoading,setIsLoading] = useState(null)
  const [notificationData,setNotificationData] = useState([])
  const token = useRef()

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user-token"));

    if (userToken) {
      token.current = userToken
    }

    const fetchNotification = async() =>{
      setIsLoading(true)
      const result = await axios(`https://api.ad-promoter.com/api/v1/notifications?page=1&pageSize=10`,{
        headers:{
          Authorization: `Bearer ${token.current}`
        }
      })
      setNotificationData(result.data.data.data)
      setIsLoading(false)
    }
    if(token.current){
      fetchNotification()
    }
  },[]);
  return (
    <NotificationStyle>
      <div className='notif'>
        <Image src={back} alt="back" onClick={goBack}/>
        <p>Notification</p>
      </div>

      {notificationData.length === 0 && isLoading ? (
        <Spinner 
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='#4F00CF'
        size='xl'
        />
      ):(
        <>
          {notificationData.length === 0 ? (
            <div style={{margin: 'auto'}}>
              <NotificationEmptyScreen />
            </div>
          ):(
            <>
              <div className='notifications'>
                {notificationData.map((item) => (
                    <div key={item._id} className="each">
                        <div className='type'>
                            <Image style={{borderRadius: '50%'}} src={item.sender?.profilePicture} alt='notification image' width={'48px'} height={'48px'}/>
                            <div className='text'>
                                <div className='advert'>
                                    <p>{item.title}</p>
                                    {!item.isRead && (
                                      <div className='red-dot'></div>
                                    )}
                                </div>
                                <span>{item.body}</span>
                            </div>
                        </div>
                        {/* <div className='date'>{item.time}</div> */}
                    </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </NotificationStyle>
  )
}

export default Index
