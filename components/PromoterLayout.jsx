import Navbar from "./PromoterNavbar/index";

const PromoterLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };
  
  export default PromoterLayout;
  