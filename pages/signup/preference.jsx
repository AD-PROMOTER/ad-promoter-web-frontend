// eslint-disable-next-line react-hooks/exhaustive-deps
import bg from '@/public/assets/onboard-bg.png'
import Close from '@/public/assets/close-icon'
import Image from "next/image"
import logo from '@/public/assets/newOnboardLogo.svg'
import Button from '@/components/authBtn/index'
import { useRouter } from "next/router"
import { BgContainer } from '@/components/onboardingBg/styles'
import { MobilePref, Overlay } from '@/styles/signupPreference'
import { useEffect, useState } from 'react'
import { useContext } from "react";
import SignupContext from '@/context/signupContext'
import { useSendOtp } from '@/hooks/useSendOtp'
import { AddUserPref } from '@/hooks/addUserPref'

const Preference = () => {
  const {userPref,setUserPref,setIsInputWithValue,seeVisualAd,linkValue} = useContext(SignupContext)
  const router = useRouter();
  const {sendOtp} = useSendOtp()
  const {phoneNumber} = useContext(SignupContext)
  const [placeAds, setPlaceAds] = useState(false)
  const [promoteAds, setPromoteAds] = useState(false)
  const [user, setUser] = useState(false)
  const {addUserPref} = useContext(AddUserPref)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user-detail"));
    setUser(user)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!user){
      if(userPref === 'promoter'){
        router.push("/signup/visualReq")
      }else{
        sendOtp(phoneNumber)
        router.push("/signup/verification")
      }
    }else{
      if(userPref === 'promoter'){
        router.push("/signup/visualReq")
      }else{
        addUserPref(userPref,seeVisualAd,linkValue)
      }
    }
  }
  useEffect(() => {
    router.prefetch('/signup/visualReq')
    setIsInputWithValue(false)

  }, [router,setIsInputWithValue])

  const togglePlaceAds = () => {
    if(placeAds) {
      setPlaceAds(false)
    }
    return;
  }
  const togglePromoterAds = () => {
    if(promoteAds) {
      setPromoteAds(false)
    }
    return;
  }
  const selectPlaceAds = (event) => {
    setUserPref(event.target.value);
    setIsInputWithValue(true)
    setPlaceAds(true)
    togglePromoterAds()
  }
  const selectPromoteAds = (event) => {
    setUserPref(event.target.value);
    setIsInputWithValue(true)
    setPromoteAds(true)
    togglePlaceAds()
  }

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
            <div className="placers" onClick={selectPlaceAds}>
              <input 
                type="radio" 
                id="place" 
                value='placer' 
                name='pref'
                checked={placeAds}
                />
              <label htmlFor="place">Place ads</label>
            </div>
            <div className="promoters" onClick={selectPromoteAds}>
              <input 
                type="radio" 
                id="promote" 
                value='promoter' 
                name='pref'
                checked={promoteAds}
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
        <div className="placers" onClick={selectPlaceAds}>
          <input 
            type="radio" 
            id="place" 
            value='place' 
            name='pref'
            checked={placeAds}
            />
          <label htmlFor="place">Place ads</label>
        </div>
        <div className="promoters" onClick={selectPromoteAds}>
          <input 
            type="radio" 
            id="promote" 
            value='promote' 
            name='pref'
            checked={promoteAds}
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