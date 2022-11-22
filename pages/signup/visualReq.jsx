import { BgContainer } from '@/components/onboardingBg/styles'
import { Overlay } from '@/styles/visualReq.styles'
import Close from '@/public/assets/close-icon'
import bg from '@/public/assets/onboard-bg.svg'
import Image from 'next/image'
import logo from '@/public/assets/newOnboardLogo.svg'
import Link from 'next/link'
import Button from '@/components/authBtn/index'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from "react";
import PreferenceContext from '@/context/preferenceContext'
const VisualReq = () => {
    const [userVisualReq,setUserVisualReq] = useState('yes')
    const {setIsPrefWithValue,isPrefWithValue} = useContext(PreferenceContext)

    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        if(userVisualReq === 'yes'){
            router.push("/signup/visualverification")
        }
        else{
            router.push("/signup/verification")
        }
    }
    const handleChange = event => {
        setUserVisualReq(event.target.value);
        setIsPrefWithValue(true)
    };
    useEffect(() => {
    router.prefetch('/signup/verification')
    setIsPrefWithValue(!isPrefWithValue)
  }, [router,setIsPrefWithValue,isPrefWithValue])
  return (
    <BgContainer image={bg}>
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
                        <input 
                            type="radio" 
                            id="yes" 
                            value='yes' 
                            name='visual'
                            // checked={userVisualReq === 'yes'}
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
                            // checked={userVisualReq === 'no'}
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
                            // checked={userVisualReq === 'remind'}
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