import { StyledLayout } from "@/styles/promoterLayout.styles";
import Navbar from "./PromoterNavbar/index";
import MobileNavbar from '@/components/MobilePromoterNavbar/index'
const PromoterLayout = ({ children }) => {
    return (
      <StyledLayout>
        <div className="desktop-nav">
          <Navbar />
        </div>
        {children}
        <div className="mobile-nav">
          <MobileNavbar />
        </div>
      </StyledLayout>
    );
  };
  
  export default PromoterLayout;
  