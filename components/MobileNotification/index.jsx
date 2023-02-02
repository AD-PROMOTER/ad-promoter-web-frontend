import React from 'react'
import Image from "next/image"
import back from '@/public/assets/back-icon.svg'
import image from '@/public/assets/Ellipse 3.svg'
import { NotificationStyle } from './style'

const index = ({goBack}) => {
    const notifications = [
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 1
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 2
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 3
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 4
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 5
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 6
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 7
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 8
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 9
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 10
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 11
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 12
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 13
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 14
        },
        {
          img: image,
          type: 'New Advert Alert',
          text: 'Tina Couture just placed a new Visual Advert (Sizzling beef sauce...), be among the first promoters to promote her advert.',
          time: 'Mar 30-3:12 PM',
          key: 15
        },
      ]
  return (
    <NotificationStyle>
      <div className='notif'>
        <Image src={back} alt="back" onClick={goBack}/>
        <p>Notification</p>
      </div>
      <div className='notifications'>
        {notifications.map((item) => (
            <div key={item.key} className="each">
                <div className='type'>
                    <Image src={item.img} alt='proifle picture'/>
                    <div className='text'>
                        <div className='advert'>
                            <p>{item.type}</p>
                            <div className='red-dot'></div>
                        </div>
                        <span>{item.text}</span>
                    </div>
                </div>
                <div className='date'>{item.time}</div>
            </div>
        ))}
      </div>
    </NotificationStyle>
  )
}

export default index
