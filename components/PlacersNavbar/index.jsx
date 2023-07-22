import Link from 'next/link'
import { StyledNavBar } from '@/components/PromoterNavbar/style'
import { links } from './links'
import logo from '@/public/assets/newest-logo.png'
import notif from '@/public/assets/notif.svg'
import profile from '@/public/assets/user-onboard-profile.png'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import NotificationContext from '@/context/notificationContext'
import NotificationContainer from '@/components/Notification/index'
import { useEffect } from 'react'
import { useState } from 'react'

import { GlobalStyle } from '@/styles/global'
const Index = () => {

    const [profileImage, setProfileImage] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user-detail'));
        setProfileImage(user.profilePicture)
    }, [])
    

    const router = useRouter();
    const { isNotifClicked,setIsNotifClicked } = useContext(NotificationContext)

    const variants = {
        animate: { width: '60px', transition: { duration: .5 } },
        stop: { width: 0 }
    };

    const handleClick = () =>{
        setIsNotifClicked(!isNotifClicked)
        if(isNotifClicked){
            document.body.classList.remove('modal-open');
        }else{
            document.body.classList.add('modal-open');
        }
    }
  return (
    <StyledNavBar>
        <div className="logo">
            <Link href='/placers'>
                <a>
                    <Image 
                        src={logo} 
                        alt='ad-promoter'
                        width={184}
                        height={19}/>
                </a>
            </Link>
        </div>

        <div className="links">
            {links.map(({name,link})=>(
                <div className="link" key={link}>
                    <Link href={link}>
                        <a className={router.pathname === link ? "activeLink" : ""}>{name}</a>
                    </Link>
                    <motion.div 
                        className={router.pathname === link ? "bottom-dash" : ""}
                        variants={variants}
                        animate={router.pathname === link ? 'animate' : 'stop'}
                        ></motion.div>
                </div>
            ))}
        </div>

        <div className="profile">
            <div className="notif" onClick={handleClick}>
                <div className="notif-img">
                    <Image src={notif} alt='notification bell'/>
                </div>
                {isNotifClicked &&(
                    <NotificationContainer />
                )}
            </div>
            <Image src={profileImage} alt='profile picture' width={52} height={52} style={{borderRadius: "50%"}}/>
        </div>
    </StyledNavBar>
  )
}

export default Index;