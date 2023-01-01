import { BgContainer } from "@/components/onboardingBg/styles"
import bg from '@/public/assets/onboard-bg.png'
import { Overlay } from "@/styles/success"
import logo from '@/public/assets/newOnboardLogo.svg'
import Image from "next/image"
import successMark from '@/public/assets/success-mark.gif'
import { useContext } from "react";
import PreferenceContext from "@/context/preferenceContext"
import { useRouter } from "next/router"
const Success = () => {
  const {userPref} = useContext(PreferenceContext)
  const router = useRouter();
 
  const handleSubmit = ()=>{
    if(userPref === 'promote'){
      router.push('/promoters')
    }
    else{
      router.push('/placers')
    }
  }
  return (
    <BgContainer image={bg}>
        <Overlay className="overlay">
            <Image src={logo} alt='ad-promoter'/>
            <div className="content">
              <h3>Success!</h3>
              <div className="img">
                <Image src={successMark} alt='success'/>
              </div>
              <p>Congratulations, You have successfully created an account. Click on the link below to go home.</p>
              <div className="btn" onClick={handleSubmit}>Take me home</div>
            </div>
        </Overlay>
    </BgContainer>
  )
}

export default Success