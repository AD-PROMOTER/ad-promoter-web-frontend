// eslint-disable-next-line react-hooks/exhaustive-deps
import { BgContainer } from '@/components/onboardingBg/styles'
import { Overlay } from '@/styles/visualReq.styles'
import Close from '@/public/assets/close-icon'
import bg from '@/public/assets/onboard-bg.png'
import Image from 'next/image'
import logo from '@/public/assets/newOnboardLogo.svg'
import Link from 'next/link'
import Button from '@/components/authBtn/index'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import { useContext } from "react";
import BackArrow from '@/public/assets/back-arrow'
import SignupContext from '@/context/signupContext'
import { useSendOtp } from '@/hooks/useSendOtp'
const VisualReq = () => {
    const {sendOtp} = useSendOtp()
    const {phoneNumber} = useContext(SignupContext)
    const {setIsInputWithValue,userVisualReq,setUserVisualReq,seeVisualAd,setSeeVisualAd} = useContext(SignupContext)
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        if(userVisualReq === 'yes'){
            router.push("/signup/visualverification")
        }
        else{
            sendOtp(phoneNumber)
            router.push("/signup/verification")
        }
    }
    const handleChange = event => {
        setUserVisualReq(event.target.value);
        console.log(userVisualReq);
        setIsInputWithValue(true)
    };

    useEffect(() => {
    router.prefetch('/signup/verification')
    setIsInputWithValue(false)
    if(userVisualReq === 'yes'){
        setSeeVisualAd(true)
    }else{
        setSeeVisualAd(false)
    }
  }, [router,setIsInputWithValue,seeVisualAd,])
  return (
    <BgContainer image={bg}>
        <Overlay className='overlay'>
            <div className='back' onClick={()=>router.back()}>
                <BackArrow />
            </div>
            <div className="close" onClick={()=>router.push('/')}>
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
                        <input 
                            type="radio" 
                            id="yes" 
                            value='yes' 
                            name='visual'
                            onChange={handleChange}
                        />
                        <label htmlFor="yes">Yes, I do</label>
                    </div>
                    <div className="no">
                        <input 
                            type="radio" 
                            id="no" 
                            value='no' 
                            name='visual' 
                            onChange={handleChange}
                            />
                        <label htmlFor='no'>No, I don&apos;t</label>
                    </div>
                    <div className="remind">
                        <input 
                            type="radio" 
                            id="remind" 
                            value='remind' 
                            name='visual' 
                            onChange={handleChange}
                            />
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