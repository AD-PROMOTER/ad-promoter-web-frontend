import { NotificationModalContainer } from "./styles"
import CloseIcon from '@/public/assets/close-circle'
import { useContext } from 'react'
import NotificationContext from '@/context/notificationContext'
const Index = () => {
  const { isNotifClicked,setIsNotifClicked } = useContext(NotificationContext)
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
      </div>
    </NotificationModalContainer>
  )
}

export default Index