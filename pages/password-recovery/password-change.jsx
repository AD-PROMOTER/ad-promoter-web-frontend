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
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { useToast } from '@chakra-ui/react'

const PasswordChange = () => {
    const {phoneNumber,setPhoneNumber,setIsInputWithValue,password,setPassword,confirmPassword,setConfirmPassword} = useContext(SignupContext)
    const [phoneState,setPhoneState] = useState(true)
    const [token,setToken] = useState(true)
    const router = useRouter()
    const phoneRef = useRef(true)
    const [isPasswordShown,setIsPasswordShown] = useState(false)
    const [passwordState,setPasswordState] = useState(true)
    const [isConfirmPasswordShown,setIsConfirmPasswordShown] = useState(false)
    const toast = useToast();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('reset-token'));
        if (token) {
            setToken(token);
        }
    }, [])
    useEffect(()=>{
        if(password !=='' && confirmPassword !== ''){
            setIsInputWithValue(true)
          }else{
            setIsInputWithValue(false)
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password && confirmPassword){
            const response = await fetch(
                `https://api.ad-promoter.com/api/v1/auth/change-password/${token}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    password,
                    confirmPassword
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
                router.push("/login")
            }
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
                <h3>Change to a new Password</h3>
                <p>Enter your new password</p>
                </div>
            </div>

            <form action="" onSubmit={handleSubmit}>
            <div className="password">
              <div className="input-container">
                <div className="label">
                  <label htmlFor="password">Your password</label>
                  <div className="hide" onClick={()=>setIsPasswordShown(!isPasswordShown)}>
                    {isPasswordShown ? (
                      <BsEyeSlashFill style={{color: 'rgba(102,102,102,0.8)'}} />
                      ):(
                      <BsEyeFill style={{color: 'rgba(102,102,102,0.8)'}} />
                    )}
                    {isPasswordShown ? (
                      <p>Hide</p>
                    ):(
                      <p>Show</p>
                    )}
                  </div>
                </div>
                <input
                  className={passwordState ? 'input' : 'invalid'}
                  type={isPasswordShown ? "text" : "password"} 
                  id="password"
                  name='password'
                  required
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                {/* <PasswordStrengthMeter /> */}
              </div>
            </div>

            <div className="password">
              <div className="input-container">
                <div className="label">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <div className="hide" onClick={()=>setIsConfirmPasswordShown(!isConfirmPasswordShown)}>
                    {isConfirmPasswordShown ? (
                      <BsEyeSlashFill style={{color: 'rgba(102,102,102,0.8)'}} />
                      ):(
                      <BsEyeFill style={{color: 'rgba(102,102,102,0.8)'}} />
                    )}
                    {isConfirmPasswordShown ? (
                      <p>Hide</p>
                    ):(
                      <p>Show</p>
                    )}
                  </div>
                </div>
                <input
                  className={passwordState ? 'input' : 'invalid'}
                  // className= {passwordState.current ? 'input' : 'invalid'} 
                  type={isConfirmPasswordShown ? "text" : "password"}
                  // type='text' 
                  id="confirmPassword"
                  name='confirmPassword'
                  required
                  value={confirmPassword}
                  onChange={(e)=> setConfirmPassword(e.target.value)}
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

export default PasswordChange