import NavbarTop from "../../Components/Navbar/NavbarTop/NavbarTop";
import SearchTicketResultContainer from "../../Components/SearchTicketResultContainer/SearchTicketResultContainer";

const SearchTicketResultPage: React.FC = () => {
   return (
      <>
         <NavbarTop MenuName="CGK - JED" MenuDescription="CGK - Jakarta -> JDH - Jeddah"/>
         <SearchTicketResultContainer/>
      </>
   );
};

export default SearchTicketResultPage;
