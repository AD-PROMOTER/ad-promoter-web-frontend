import AdminNavbar from '@/components/AdminNavbar/index'
const PromoterLayout = ({ children }) => {
    return (
      <div>
        <AdminNavbar />
        {children}
      </div>
    );
  };
  
  export default PromoterLayout;
  