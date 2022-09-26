import { BgContainer } from "@/components/onboardingBg/styles"
import bg from '@/public/assets/onboard-bg.svg'
import { Overlay } from "@/styles/success"
import logo from '@/public/assets/onboard-logo.svg'
import Image from "next/image"
import successMark from '@/public/assets/Rectangle.svg'
import { useContext } from "react";
import AppContext from '@/context/context'
import { useRouter } from "next/router"
const Success = () => {
  const router = useRouter();
  const value = useContext(AppContext);
  let { userRole } = value.userRole;
  const handleSubmit = ()=>{
    if(userRole === 'place'){
      router.push('/placers')
    }
    else{
      router.push('/promoters')
    }
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