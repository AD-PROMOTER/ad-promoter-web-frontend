// eslint-disable-next-line react-hooks/exhaustive-deps
import bg from '@/public/assets/onboard-bg.png'
import Close from '@/public/assets/close-icon'
import Image from "next/image"
import logo from '@/public/assets/newOnboardLogo.svg'
import Button from '@/components/authBtn/index'
import { useRouter } from "next/router"
import { BgContainer } from '@/components/onboardingBg/styles'
import { MobilePref, Overlay } from '@/styles/signupPreference'
import { useEffect } from 'react'
import { useContext } from "react";
import PreferenceContext from '@/context/preferenceContext'

const Preference = () => {
  const {userPref,setUserPref,setIsPrefWithValue,setIsInputWithValue,isInputWithValue} = useContext(PreferenceContext)
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault()
    if(userPref === 'promote'){
      router.push("/signup/visualReq")
    }else{
      router.push("/signup/verification")
    }
  }
  useEffect(() => {
    router.prefetch('/signup/visualReq')
    setIsInputWithValue(false)

  }, [router,setIsInputWithValue])
  const handleChange = event => {
    setUserPref(event.target.value);
    setIsInputWithValue(true)
  };
  return (
    <>
    <BgContainer image={bg}>
      <Overlay className="overlay">
        <div className="close" onClick={()=>router.push('/')}>
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
                id="place" 
                value='place' 
                name='pref'
                // checked={userPref === 'place'}
                onChange={handleChange}
                />
              <label htmlFor="place">Place ads</label>
            </div>
            <div className="promoters">
              <input 
                type="radio" 
                id="promote" 
                value='promote' 
                name='pref'
                // checked={userPref === 'promote'}
                onChange={handleChange}
                />
              <label htmlFor='promote'>Promote ads</label>
            </div>
            <Button text='Next' />
          </form>
        </div>
      </Overlay>
    </BgContainer>
    <MobilePref>
      <div className='logo'>
        <Image src={logo} alt='ad-promoter logo'/>
      </div>
      <h3>What do you want use <br/> Ad-promoter for?</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="placers">
          <input 
            type="radio" 
            id="place" 
            value='place' 
            name='pref'
            // checked={userPref === 'place'}
            onChange={handleChange}
            />
          <label htmlFor="place">Place ads</label>
        </div>
        <div className="promoters">
          <input 
            type="radio" 
            id="promote" 
            value='promote' 
            name='pref'
            // checked={userPref === 'promote'}
            onChange={handleChange}
            />
          <label htmlFor='promote'>Promote ads</label>
        </div>
        <Button text='Next' />
      </form>
    </MobilePref>
    </>
  )
}

export default Preference