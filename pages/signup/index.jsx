// import Container from '@/components/onBoardBg/index'
import bg from '@/public/assets/onboard-bg.svg'
import { Overlay } from '@/styles/signup'
import Image from 'next/image'
import logo from '@/public/assets/onboard-logo.svg'
import icon from '@/public/assets/hide-icon.svg'
import Button from '@/components/authBtn/index'
import Link from 'next/link'
import Close from '@/public/assets/close-icon'
// import Home from '@/pages/index'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BgContainer } from '@/components/onboardingBg/styles'
const Index = () => {
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/signup/preference")
  }
  useEffect(() => {
    router.prefetch('/signup/preference')
  }, [router])
  const [isPasswordShown,setIsPasswordShown] = useState(false)
  return (
    <BgContainer image={bg}>
      {/* <Image 
      src={bg}
      alt='background image'
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className='landing-image'
      /> */}
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
              <input type="text" id="name" required/>
            </div>
            <div className="email">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" required/>
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
                <input type={isPasswordShown ? "text" : "password"} id="password" required/>
              </div>
              <p>Forgot your password</p>
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