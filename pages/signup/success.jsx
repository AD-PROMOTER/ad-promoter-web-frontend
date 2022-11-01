import { BgContainer } from "@/components/onboardingBg/styles"
import bg from '@/public/assets/onboard-bg.svg'
import { Overlay } from "@/styles/success"
import logo from '@/public/assets/onboard-logo.svg'
import Image from "next/image"
import successMark from '@/public/assets/Rectangle.svg'
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
        {/* <Image 
          src={bg}
          alt='background image'
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className='landing-image'
        /> */}
        <Overlay className="overlay">
            <Image src={logo} alt='ad-promoter'/>
            <div className="content">
                <h3>Success!</h3>
                <Image src={successMark} alt='success'/>
                <p>Congratulations, You have successfully created an account. Click on the link below to go home.</p>
                <div className="btn" onClick={handleSubmit}>Take me home</div>
            </div>
        </Overlay>
    </BgContainer>
  )
}

export default Success