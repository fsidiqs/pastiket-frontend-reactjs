import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import TicketDetail from "../../Components/TicketDetail/TicketDetail";

const TicketDetailPage: React.FC = () => {
   return (
      <>
         <NavigationTop MenuName="Detail Pemesanan" />
         <TicketDetail/>
      </>
   );
};

export default TicketDetailPage;
