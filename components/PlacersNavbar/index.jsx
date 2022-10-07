import Link from 'next/link'
import { StyledNavBar } from '@/components/PromoterNavbar/style'
import { links } from './links'
import logo from '@/public/assets/logo.svg'
import notif from '@/public/assets/notif.svg'
import profile from '@/public/assets/Profil.svg'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Index = () => {
    const router = useRouter();
    const variants = {
        animate: { width: '60px', transition: { duration: .5 } },
        stop: { width: 0 }
    };
  return (
    <StyledNavBar>
        <div className="logo">
            <Link href='/placers'>
                <a>
                    <Image src={logo} alt='ad-promoter'/>
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
            <Image src={notif} alt='notification bell'/>
            <Image src={profile} alt='profile picture'/>
        </div>
    </StyledNavBar>
  )
}

export default Index;