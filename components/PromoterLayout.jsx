import { StyledLayout } from "@/styles/promoterLayout.styles";
import Navbar from "./PromoterNavbar/index";
import MobileNavbar from '@/components/MobilePromoterNavbar/index'
import { useRef } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
const PromoterLayout = ({ children }) => {
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
        {/* {token.current && ( */}
          <StyledLayout>
            <div className="desktop-nav">
              <Navbar />
            </div>
            {children}
            <div className="mobile-nav">
              <MobileNavbar />
            </div>
          </StyledLayout>
        {/* )} */}
      </>
    );
  };
  
  export default PromoterLayout;
  