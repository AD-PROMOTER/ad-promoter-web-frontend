import { BgContainer } from "@/components/onboardingBg/styles"
import { Overlay } from "@/styles/verification.styles"
import logo from '@/public/assets/logo-rounded.svg'
import Image from "next/image"
import bg from '@/public/assets/onboard-bg.png'
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import SignupContext from "@/context/signupContext"
import Arrow from '@/public/assets/back-arrow'
import Close from '@/public/assets/close-icon'
import { useSendOtp } from "@/hooks/useSendOtp"
import { useVerification } from "@/hooks/useSmsVerififcation"
import { useSignup } from "@/hooks/useSignup"
const Verification = () => {
    const router = useRouter();
    const {sendOtp} = useSendOtp()
    const {signup} = useSignup()
    const [input1,setInput1] = useState('')
    const [input2,setInput2] = useState('')
    const [input3,setInput3] = useState('')
    const [input4,setInput4] = useState('')
    const [isOtpWithValue,setIsOtpWithValue] = useState(false)
    const {setOtp,phoneNumber,setRefId,otp,refId,accountName,linkValue,seeVisualAd,email,password,userPref} = useContext(SignupContext)    
    
    useEffect(() => {
        router.prefetch('/signup/success')
        const otpInfo = JSON.parse(localStorage.getItem('OTP_INFO'));
        if (otpInfo) {
            setRefId(otpInfo.data.reference_id);
        }
        if(input1 || input2 || input3 || input4 === ''){
            setIsOtpWithValue(false)
            // console.log('it is false');
        }else if(input1 && input2 && input3 && input4 !== ''){
            setIsOtpWithValue(true)
            // console.log('it is true');
        }
        setOtp(input1+input2+input3+input4)
        // console.log(isOtpWithValue);
    }, [router,input1,input2,input3,input4,otp,isOtpWithValue])



    const handleSubmit = (e) => {
        e.preventDefault()
        if(input1 && input2 && input3 && input4 && input4 !== ''){
            signup(refId,otp,phoneNumber,accountName,linkValue,seeVisualAd,email,password,userPref)
            router.push("/signup/success")
            console.log(refId,otp,phoneNumber,accountName,linkValue,seeVisualAd,email,password,userPref);
        }
    }

    const handleResend = () =>{
        sendOtp(phoneNumber)
    }
    
  return (
    <>
    <BgContainer image={bg}>
        <Overlay className="overlay">
            <div onClick={()=> router.push('/')} className="close">
                <Close />
            </div>
            <div onClick={()=> router.back()} className="back">
                <Arrow />
            </div>
            <div className="content-container">
                <div className="content">
                    <div className="content-header">
                        <Image src={logo} alt='ad-promoter logo'/>
                        <div className="content-header-text">
                            <h2>OTP Verification</h2>
                            <p>Enter the otp you received to <span>{phoneNumber}</span></p>
                        </div>
                    </div>

                    <div className="content-input">
                        <div className="input-container">
                            <input 
                                type="number" 
                                name="otp" 
                                id="otp" 
                                value={input1}
                                onChange={e => setInput1(e.target.value)}
                            />
                            <input 
                                type="number" 
                                name="otp" 
                                id="otp" 
                                value={input2}
                                onChange={e => setInput2(e.target.value)}
                            />
                            <input 
                                type="number" 
                                name="otp" 
                                id="otp" 
                                value={input3}
                                onChange={e => setInput3(e.target.value)}
                            />
                            <input 
                                type="number" 
                                name="otp" 
                                id="otp" 
                                value={input4}
                                onChange={e => setInput4(e.target.value)}
                            />
                           
                        </div>
                        <p>Didn’t get anything? <span onClick={handleResend}>Resend OTP</span></p>
                    </div>
                </div>

                <button onClick={handleSubmit} className={isOtpWithValue ? 'content-btn' : 'inactive'}>Submit</button>
            </div>
        </Overlay>
    </BgContainer>
    {/* <VerificationMobile>
        <div className="logo">
            <Image src={logo} alt='ad-promoter' />
            <Image src={messagesIllustration} alt='messages illustration'/>
        </div>
        <h3>Verify your email address</h3>
        <div className="verify">
            We have sent an email to skylardiaz@gmail.com to confirm the validity of your email address. After recieveing the email, follow the link provided to complete your registration.
        </div>
        <div className="btn" onClick={handleSubmit}>
            Verify my mail
        </div>
        <div className="cta">
            <p>If you’ve not gotten any mail <Link href='#'><a>Resend confirmation mail</a></Link></p>
        </div>
    </VerificationMobile> */}
    </>
  )
}

export default Verification