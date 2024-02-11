import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import SearchTicket from "../../Components/SearchTicket/SearchTicket";

const TicketsPage: React.FC = () => {
   return (
      <>
         <NavigationTop MenuName="Cari Tiket" />
         <SearchTicket/>
      </>
   );
};

export default TicketsPage;
