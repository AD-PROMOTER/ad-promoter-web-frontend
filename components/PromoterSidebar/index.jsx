import Link from 'next/link'
import { StyledSideBar } from './style'
import { links } from './links'
import Image from 'next/image'
import exit from '@/public/assets/exit.svg'
// import bg from '@/public/assets/Frame 35436.svg'
import memoji from '@/public/assets/memoji.svg'
import hands from '@/public/assets/wave-hand.svg'
import { useRouter } from 'next/router'
// import { useState } from 'react'
const index = () => {
    const router = useRouter();
  return (
    <StyledSideBar>
        <div className="container">
            <div className="menu">
                {links.map(({title,link})=>(
                    <div key={title}>
                        <p>{title}</p>
                        {link.map(({name,icon,pathName,cIcon})=>(
                            <div key={name}>
                                <div className={router.pathname === pathName ? "side-line" : ""}></div>
                                <Link href={pathName} passHref>
                                    <a className={router.pathname === pathName ? "activeLink" : ""}>
                                        <Image src={router.pathname === pathName ? cIcon : icon} width={25} height={25}/>
                                        <span>{name}</span>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="logout">
                <Image src={exit}/>
                <p>Log Out</p>
            </div>
            <div className="bottom">
                <Image src={memoji}/>
                <h3>Hi, Skylar Dias</h3>
                <div>
                    <Image src={hands}/>
                    <p>Welcome back!</p>
                </div>
            </div>
        </div>
    </StyledSideBar>
  )
}

export default index