import NavbarTop from "../../Components/Navbar/NavbarTop/NavbarTop";
import TicketDetail from "../../Components/TicketDetail/TicketDetail";

const TicketDetailPage: React.FC = () => {
   return (
      <>
         <NavbarTop MenuName="Detail Pemesanan" />
         <TicketDetail/>
      </>
   );
};

export default TicketDetailPage;
