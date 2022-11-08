import { BgContainer } from "@/components/onboardingBg/styles"
import bg from '@/public/assets/onboard-bg.svg'
import { Overlay } from "@/styles/visualReq.styles"
import Close from '@/public/assets/close-icon'
import Copy from '@/public/assets/copy-icon'
import { useRouter } from 'next/router'
import { StyledContent } from "@/styles/visualverification.styled"
import Image from "next/image"
import logo from '@/public/assets/newOnboardLogo.svg'
import Button from '@/components/authBtn/index'
import { useContext, useEffect, useState } from "react"
import PreferenceContext from "@/context/preferenceContext"
const Visualverification = () => {
    const {setIsInputWithValue} = useContext(PreferenceContext)
    const [inputValue,setInputValue] = useState('')
    const router = useRouter()

    useEffect(() =>{
        if(inputValue !== ''){
            setIsInputWithValue(true)
        }else{
            setIsInputWithValue(false)
        }
    })
    const handleClick = () =>{
        if(inputValue !== ''){
            router.push("/signup/verification")
        }
    }
    const handleChange = event => {
        setInputValue(event.target.value);
    };
  return (
    <BgContainer image={bg}>
        <Overlay className="overlay">
            <div className="close" onClick={()=>router.back()}>
                <Close />
            </div>
            <StyledContent>
                <div className="header">
                    <Image src={logo} alt='ad-promoter logo'/>
                    <div className="header-text">
                        <h3>Kindly submit a link to your social media account.</h3>
                        <p>We just want to verify if you’re fit to recieve visual adverts from AD-PROMOTER.</p>
                    </div>
                </div>
                <div className="submitform">
                    <div className="paste-input-container">
                        <div className="paste-input">
                            <div className="copy-icon">
                                <Copy />
                            </div>
                            <div className="input">
                                <input 
                                    type="text" 
                                    onChange={handleChange}
                                    value = {inputValue}
                                    required    
                                />
                            </div>
                            <div className="button">
                                <p>paste</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick}>
                        <Button text="Submit"/>
                    </div>
                </div>
            </StyledContent>
        </Overlay>
    </BgContainer>
  )
}

export default Visualverification