import PlacersNavbar from '@/components/PlacersNavbar/index'
import { StyledLayout } from '@/styles/promoterLayout.styles';
import MobileNavbar from "@/components/MobilePlacersNavbar/index"
const PlacersLayout = ({ children }) => {
    return (
      <StyledLayout>
        <div className="desktop-nav">
          <PlacersNavbar />
        </div>
        {children}
        <div className="mobile-nav">
          <MobileNavbar />
        </div>
      </StyledLayout>
    );
  };
  
  export default PlacersLayout;
  