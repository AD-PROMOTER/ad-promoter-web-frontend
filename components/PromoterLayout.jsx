import Sidebar from "./PromoterSidebar/index";

const PromoterLayout = ({ children }) => {
    return (
      <div style={{display: 'flex'}}>
        <Sidebar />
        {children}
      </div>
    );
  };
  
  export default PromoterLayout;
  