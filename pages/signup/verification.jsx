import { BgContainer } from "@/components/onboardingBg/styles"
import { Overlay, VerificationMobile } from "@/styles/verification.styles"
import logo from '@/public/assets/newLogo.svg'
import Image from "next/image"
import bg from '@/public/assets/onboard-bg.png'
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import messagesIllustration from '@/public/assets/messagesIllustration.svg'
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
    <>
    <BgContainer image={bg}>
        <Overlay className="overlay">
            <div className="content">
                <div className="content-info">
                    <div className="content-info-text">
                        <Image src={logo} alt='ad-promoter' />
                        <div className="content-info-text-child">
                            <Image src={messagesIllustration} alt='messages illustration'/>
                            <div className="content-info-text-child_text">
                                <h3>Verfify your email address</h3>
                                <p>We have sent an email to skylardiaz@gmail.com to confirm 
                                    the validity of your email address. After recieveing the email, 
                                    follow the link provided to complete your registration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-info-btn" onClick={handleSubmit}>
                        Verify my mail
                    </div>
                </div>
                <div className="cta">
                <p>If you’ve not gotten any mail <Link href='#'><a>Resend confirmation mail</a></Link></p>
                </div>
            </div>
        </Overlay>
    </BgContainer>
    <VerificationMobile>
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
    </VerificationMobile>
    </>
  )
}

export default Verification