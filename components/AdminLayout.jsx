import AdminNavbar from '@/components/AdminNavbar/index'
import { useRouter } from "next/router";
const PromoterLayout = ({ children }) => {
  const router = useRouter()
    return (
      <div>
        <AdminNavbar />
        {children}
      </div>
    );
  };
  
  export default PromoterLayout;
  