import { BgContainer } from "@/components/onboardingBg/styles"
import { Overlay } from "@/styles/verification.styles"
import logo from '@/public/assets/logo.svg'
import Image from "next/image"
import bg from '@/public/assets/onboard-bg.svg'
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
const Verification = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/signup/success")
    }
    useEffect(() => {
        router.prefetch('/signup/success')
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
        <Overlay className="overlay">
            <div className="content">
                <div className="verify-info">
                    <Image src={logo} alt='ad-promoter logo'/>
                    <div className="verify-info-text">
                        <div className="verify-info-text-head">
                            <h3>Verfify your email address</h3>
                            <div></div>
                        </div>
                        <p>We have sent an email to skylardiaz@gmail.com to confirm the validity of your email address. After recieveing the email, follow the link provided to complete your registration.</p>
                    </div>
                    <div className="btn" onClick={handleSubmit}>Verify my mail</div>
                </div>
                <div className="cta">
                    <p>If you’ve not gotten any mail <Link href='#'><a>Resend confirmation mail</a></Link></p>
                </div>
            </div>
        </Overlay>
    </BgContainer>
  )
}

export default Verification