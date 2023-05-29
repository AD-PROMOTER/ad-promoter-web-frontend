import PlacersNavbar from '@/components/PlacersNavbar/index'
import { StyledLayout } from '@/styles/promoterLayout.styles';
import MobileNavbar from "@/components/MobilePlacersNavbar/index"
import { useRef } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const PlacersLayout = ({ children }) => {
  const token = useRef('')
  const Router = useRouter()

  useEffect(()=>{
    const userToken = JSON.parse(localStorage.getItem("user-token"));
    if(userToken){
      token.current = userToken
    }else{
      Router.push('/login')
    }
  },[Router])
    return (
      <>
        {token.current &&(
          <StyledLayout>
            <div className="desktop-nav">
              <PlacersNavbar />
            </div>
            {children}
            <div className="mobile-nav">
              <MobileNavbar />
            </div>
          </StyledLayout>
        )}
      </>
    );
  };
  
  export default PlacersLayout;
  