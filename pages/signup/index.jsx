// import Container from '@/components/onBoardBg/index'
import bg from '@/public/assets/onboard-bg.svg'
import { Overlay } from '@/styles/signup'
import Image from 'next/image'
import logo from '@/public/assets/newOnboardLogo.svg'
import icon from '@/public/assets/hide-icon.svg'
import Button from '@/components/authBtn/index'
import Link from 'next/link'
import Close from '@/public/assets/close-icon'
// import Home from '@/pages/index'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { BgContainer } from '@/components/onboardingBg/styles'
import { useContext } from "react";
import PreferenceContext from '@/context/preferenceContext'
import PhoneInput,{ formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber,isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const Index = () => {
  const [isPasswordShown,setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown,setIsConfirmPasswordShown] = useState(false)
  const phoneRef = useRef(true)
  const [phoneState,setPhoneState] = useState(true)
  const [passwordState,setPasswordState] = useState(true)
  const passwordRef = useRef(true)
  const [inputValidation, setInputValidation] = useState()
  const {userFormValue,setUserFormValue,setIsInputWithValue,IsInputWithValue,userTel,setUserTel} = useContext(PreferenceContext)
  const router = useRouter()
  
  useEffect(() => {
    router.prefetch('/signup/preference')
    if(userFormValue.name !== '' && userFormValue.email !== '' && userFormValue.password !== '' && userFormValue.confirmPassword !=='' && userTel !==''){
      setIsInputWithValue(true)
    }else{
      setIsInputWithValue(false)
    }
  }, [inputValidation, router, setIsInputWithValue, userFormValue, userTel])

  const handleSubmit = (e) => {
    e.preventDefault()    
    if(userTel && isPossiblePhoneNumber(userTel) && userTel && isValidPhoneNumber(userTel) && userTel && formatPhoneNumber(userTel) && formatPhoneNumberIntl(userTel)){
      phoneRef.current = true
      setPhoneState(true)
    }
    else{
      phoneRef.current = false
      setPhoneState(false)
    }
    if(userFormValue.confirmPassword === userFormValue.password){
      passwordRef.current = true
      setPasswordState(true)
    }else{
      passwordRef.current = false
      setPasswordState(false)
    }
    if(passwordRef.current && phoneRef.current === true) {
      router.push('/signup/preference')
    }
  }

  const handleChange = (e) =>{
    const value = e.target.value;
    setUserFormValue({
      ...userFormValue,[e.target.name]: value
    })
  }
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
              <h3>Welcome to Ad-promoter!</h3>
              <p>Let’s help you get started</p>
            </div>
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Your name</label>
              <input 
                type="text" 
                id="name"
                name='name'
                value={userFormValue.name} 
                required
                onChange={handleChange}
                className= 'input'
              />
            </div>
            <div className="email">
              <label htmlFor="email">Your email</label>
              <input 
                type="email" 
                id="email"
                name='email'
                required
                value={userFormValue.email}
                onChange={handleChange}
                className= 'input'
              />
            </div>
            <div className="tel">
              <label htmlFor="tel">Your Phone number</label>
              <div className="tel-input">
                <PhoneInput
                  defaultCountry="NG"
                  international
                  value={userTel}
                  onChange={userTel => setUserTel(userTel)}
                  className={phoneState ? 'input' : 'invalid'}
                />
              </div>
            </div>

            <div className="password">
              <div className="input-container">
                <div className="label">
                  <label htmlFor="password">Your password</label>
                  <div className="hide" onClick={()=>setIsPasswordShown(!isPasswordShown)}>
                    <Image src={icon} alt='password hide icon'/>
                    {isPasswordShown ? (
                      <p>Hide</p>
                    ):(
                      <p>Show</p>
                    )}
                  </div>
                </div>
                <input
                  className='input'
                  // type = 'text' 
                  type={isPasswordShown ? "text" : "password"} 
                  id="password"
                  name='password'
                  required
                  value={userFormValue.password}
                  onChange={handleChange}
                  />
              </div>
            </div>

            <div className="password">
              <div className="input-container">
                <div className="label">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <div className="hide" onClick={()=>setIsConfirmPasswordShown(!isConfirmPasswordShown)}>
                    <Image src={icon} alt='password hide icon'/>
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
                  value={userFormValue.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <Button text='Next' />
          </form>
        </div>
        <div className="login">
          <p>Already have an account? <Link href='/login'><a>Login</a></Link></p>
        </div>
      </Overlay>
    </BgContainer>
  )
}

export default Index