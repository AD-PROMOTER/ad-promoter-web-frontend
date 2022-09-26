import { BgContainer } from '@/components/onboardingBg/styles'
import { Overlay } from '@/styles/visualReq.styles'
import Close from '@/public/assets/close-icon'
import bg from '@/public/assets/onboard-bg.svg'
import Image from 'next/image'
import logo from '@/public/assets/onboard-logo.svg'
import Link from 'next/link'
import Button from '@/components/authBtn/index'
import { useRouter } from "next/router"
import { useEffect } from 'react'
const VisualReq = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/signup/verification")
    }
    useEffect(() => {
    router.prefetch('/signup/verification')
  }, [router])
  return (
    <BgContainer>
        <Image 
            src={bg}
            alt='background image'
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className='landing-image'
            priority
        />
        <Overlay className='overlay'>
            <div className="close" onClick={()=>router.back()}>
                <Close />
            </div> 
            <div className="content">
                <div className="welcome">
                    <Image src={logo} alt='ad-promoter logo'/>
                    <div className="welcome-text">
                        <h3>Do you want to recieve visual ads?</h3>
                        <p>What are visual ads? <Link href='#'><a>Learn more</a></Link> </p>
                    </div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="yes">
                        <input type="radio" id="yes" value='yes' name='visual'/>
                        <label htmlFor="yes">Yes, I do</label>
                    </div>
                    <div className="no">
                        <input type="radio" id="no" value='no' name='visual' />
                        <label htmlFor='no'>No, I don&apos;t</label>
                    </div>
                    <div className="remind">
                        <input type="radio" id="remind" value='remind' name='visual' />
                        <label htmlFor='remind'>Remind me later</label>
                    </div>
                    <Button text='Sign me in' />
                </form>
            </div>
        </Overlay>
    </BgContainer>
  )
}

export default VisualReq