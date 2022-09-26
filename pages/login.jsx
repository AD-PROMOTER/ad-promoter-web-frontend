import { BgContainer } from "@/components/onboardingBg/styles"
import bg from '@/public/assets/onboard-bg.svg'
import { Overlay } from "@/styles/login.styles"
import Close from '@/public/assets/close-icon'
import Image from "next/image"
import logo from '@/public/assets/onboard-logo.svg'
import SocialBtn from '@/components/socialMediaBtn/index';
import google from '@/public/assets/google.svg';
import fb from '@/public/assets/fb.svg';
import Button from '@/components/authBtn/index'
import icon from '@/public/assets/hide-icon.svg'
import { useRouter } from "next/router"
import Link from "next/link"
// import Container from '@/components/onBoardBg/index'
const Login = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/")
  }
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
          <div className="content-header">
            <Image src={logo} alt='ad-promoter logo'/>
            <div className="content-header-text">
              <h3>Log in</h3>
              <p>Don’t have an account? <Link href='/signup'><a>Sign up</a></Link></p>
            </div>
          </div>
          <div className="content-socials">
            <SocialBtn icon={google} text="Google" />
            <SocialBtn icon={fb} text="Facebook" />
          </div>
          <div className="divider">
            <div></div>
            <p>OR</p>
            <div></div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" required/>
            </div>
            <div className="password">
              <div className="input-container">
                <div className="label">
                  <label htmlFor="password">Your password</label>
                  <div className="hide">
                    <Image src={icon} alt='password hide icon'/>
                    <p>Hide</p>
                  </div>
                </div>
                <input type="password" id="password" required/>
              </div>
              <p>Forgot your password</p>
            </div>
            <Button text='Log in' />
          </form>
        </div>
      </Overlay>
    </BgContainer>
  )
}

export default Login