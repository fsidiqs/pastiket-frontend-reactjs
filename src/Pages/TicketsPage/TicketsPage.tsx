import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import SearchTiket from "../../Components/SearchTiket/SearchTiket";

const TicketsPage: React.FC = () => {
   return (
      <>
         <NavigationTop MenuName="Cari Tiket" />
         <SearchTiket/>
      </>
   );
};

export default TicketsPage;
