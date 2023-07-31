import NavbarTop from "../../Components/Navbar/NavbarTop/NavbarTop";
import SearchTiket from "../../Components/SearchTiket/SearchTiket";

const TicketsPage: React.FC = () => {
   return (
      <>
         <NavbarTop MenuName="Cari Tiket" />
         <SearchTiket/>
      </>
   );
};

export default TicketsPage;
