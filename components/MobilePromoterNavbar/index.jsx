import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { links } from './links'
import { motion } from 'framer-motion'
import { StyledMobileNav } from './style'

const Index = () => {
    const router = useRouter();
    const variants = {
        animate: { width: '60px', transition: { duration: .5 } },
        stop: { width: 0 }
    };
  return (
    <StyledMobileNav>
        <div>
            {links.map(({icon,link,activeIcon})=>(
                <div className="link" key={link}>
                    <Link href={link}>
                        <a>
                            {router.pathname === link ? 
                                <Image src={activeIcon} alt={activeIcon}/>
                            : 
                                <Image src={icon} alt={icon}/>
                            }
                        </a>
                    </Link>
                    <div className={router.pathname === link ? "bottom-dash" : ""}>

                    </div>
                    {/* <motion.div 
                        className={router.pathname === link ? "bottom-dash" : ""}
                        variants={variants}
                        animate={router.pathname === link ? 'animate' : 'stop'}
                    ></motion.div> */}
                </div>
            ))}
        </div>
    </StyledMobileNav>
  )
}

export default Index