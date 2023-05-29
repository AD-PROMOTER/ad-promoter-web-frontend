import { NotificationModalContainer } from "./styles"
import CloseIcon from '@/public/assets/close-circle'
import { useContext, useEffect, useState } from 'react'
import NotificationContext from '@/context/notificationContext'
import image from '@/public/assets/Ellipse 3.svg'
import Image from "next/image"
const Index = () => {
  const { isNotifClicked,setIsNotifClicked } = useContext(NotificationContext)
  const [isLoading,setIsLoading] = useState(null)
  const [notificationData,setNotificationData] = useState()
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
      console.log(result.data);
    }
    if(token.current){
      fetchNotification()
    }
  },[]);
  return (
    <NotificationModalContainer>
      <div className="notification-modal">
        <div className="notification-modal-head">
          <div className="notification-modal-head-inner">
            <h3>notifications</h3>
            <div className="close-icon" onClick={()=>setIsNotifClicked(!isNotifClicked)}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className="notification-modal-body">
          {notificationData.map((item)=> (
            <div className="notification-modal-body-item" key={item._id}>
              <div className="notification-modal-body-item-textContainer">
                <Image src={item.sender?.profilePicture} alt='notification image'/>
                <div className="notification-modal-body-item-textContainer-text">
                  <div className="notification-modal-body-item-textContainer-text-head">
                    <h3>{item.title}</h3>
                    {!item.isRead && (
                      <div className="red-circle"></div>
                    )}
                  </div>
                  <div className="notification-modal-body-item-textContainer-text-info">
                    <p>{item.body}</p>
                  </div>
                </div>
              </div>
              <div className="time-stamp">
                <p>{time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NotificationModalContainer>
  )
}

export default Index