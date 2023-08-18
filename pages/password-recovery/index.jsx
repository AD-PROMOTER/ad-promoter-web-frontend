import { BgContainer } from '@/components/onboardingBg/styles'
import bg from '@/public/assets/bg.png'
import { Overlay } from '@/styles/signup'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Close from '@/public/assets/close-icon'
import logo from '@/public/assets/newOnboardLogo.svg'
import PhoneInput from 'react-phone-number-input'
import { useContext } from 'react'
import SignupContext from '@/context/signupContext'
import { useState } from 'react'
import { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber,isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from '@/components/authBtn/index'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useToast } from '@chakra-ui/react'

const Index = () => {
    const {phoneNumber,setPhoneNumber,setIsInputWithValue} = useContext(SignupContext)
    const [phoneState,setPhoneState] = useState(true)
    const router = useRouter()
    const phoneRef = useRef(true)
    const toast = useToast();

    useEffect(()=>{
        if(phoneNumber !==''){
            setIsInputWithValue(true)
          }else{
            setIsInputWithValue(false)
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(phoneNumber && isPossiblePhoneNumber(phoneNumber) && phoneNumber && isValidPhoneNumber(phoneNumber) && phoneNumber && formatPhoneNumber(phoneNumber) && formatPhoneNumberIntl(phoneNumber)){
            phoneRef.current = true
            setPhoneState(true)
            const response = await fetch(
                'https://api.ad-promoter.com/api/v1/auth/forgot-password-phone',
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    phoneNumber,
                  }),
                }
            );
            const json = await response.json();
            if (!response.ok) {
                toast({
                  title: json.msg,
                  status: 'error',
                  duration: '5000',
                  isClosable: true,
                  position: 'bottom-left',
                });
            }
            if (response.ok) {
                localStorage.setItem('OTP_INFO', JSON.stringify(json));
                router.push("/password-recovery/verification")
            }
        }
        else{
            phoneRef.current = false
            setPhoneState(false)
            toast({
              title: 'Enter a valid phone number',
              status: 'error',
              duration: '5000',
              isClosable: true,
              position: 'bottom-left',
            });
        }
    }
  return (
    <BgContainer image={bg}>
      <Overlay className='overlay'>
      <div className="close" onClick={()=>router.push('/')}>
          <Close />
        </div>
        <div className="content">
            <div className="welcome">
                <Image src={logo} alt='ad-promoter logo'/>
                <div className="welcome-text">
                <h3>Find your Account</h3>
                <p>Enter your phone number</p>
                </div>
            </div>

            <form action="" onSubmit={handleSubmit}>
                <div className="tel">
                    <label htmlFor="tel">Your Phone number</label>
                    <div className="tel-input">
                        <PhoneInput
                        defaultCountry="NG"
                        international
                        value={phoneNumber}
                        onChange={phoneNumber => setPhoneNumber(phoneNumber)}
                        className={phoneState ? 'input' : 'invalid'}
                        />
                    </div>
                </div>
                <Button text='Next' />

            </form>
        </div>

      </Overlay>
    </BgContainer>
  )
}

export default Index