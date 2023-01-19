import PlacersNavbar from '@/components/PlacersNavbar/index'
const PlacersLayout = ({ children }) => {
    return (
      <div>
        <PlacersNavbar />
        {children}
      </div>
    );
  };
  
  export default PlacersLayout;
  