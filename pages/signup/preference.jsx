import bg from '@/public/assets/onboard-bg.svg'
import Close from '@/public/assets/close-icon'
import Image from "next/image"
import logo from '@/public/assets/onboard-logo.svg'
import Button from '@/components/authBtn/index'
import { useRouter } from "next/router"
import { BgContainer } from '@/components/onboardingBg/styles'
import { Overlay } from '@/styles/signupPreference'
import { useEffect } from 'react'
import { useContext } from "react";
import AppContext from '@/context/context'
const Preference = () => {
  const value = useContext(AppContext);
  let { userRole } = value.userRole;
  // let { setUserRole } = value.setUserRole;
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/signup/visualReq")
  }
  useEffect(() => {
    router.prefetch('/signup/visualReq')
  }, [router])
  // const [selected, setSelected] = useState('place')
  const handleChange = e => {
    value.setUserRole(e.target.value);
  };
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
        <div className="close" onClick={()=>router.back()}>
          <Close />
        </div>
        <div className="content">
          <div className="welcome">
            <Image src={logo} alt='ad-promoter logo'/>
            <div className="welcome-text">
              <h3>What do you want use Ad-promoter for?</h3>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="placers">
              <input 
                type="radio" 
                id="placers" 
                value='place' 
                name='pref'
                
                onChange={handleChange}/>
              <label htmlFor="placers">Place ads</label>
            </div>
            <div className="promoters">
              <input 
                type="radio" 
                id="promoters" 
                value='promote' 
                name='pref'
                
                onChange={handleChange}/>
              <label htmlFor='promoters'>Promote ads</label>
            </div>
            <Button text='Next' />
          </form>
        </div>
      </Overlay>
    </BgContainer>
  )
}

export default Preference