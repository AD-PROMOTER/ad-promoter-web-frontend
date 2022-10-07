import Navbar from "./PromoterNavbar/index";
import PlacersNavbar from '@/components/PlacersNavbar/index'
import { useRouter } from "next/router";
const PromoterLayout = ({ children }) => {
  const router = useRouter()
    return (
      <div>
        {router.pathname.startsWith('/promoters') ? <Navbar /> : <PlacersNavbar />}
        {children}
      </div>
    );
  };
  
  export default PromoterLayout;
  