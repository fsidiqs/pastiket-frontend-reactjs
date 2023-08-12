import NavbarTop from "../../Components/Navbar/NavbarTop/NavbarTop";
import SearchTicketResultContainer from "../../Components/SearchTicketResultContainer/SearchTicketResultContainer";

const SearchTicketResultPage: React.FC = () => {
   // aspiron debugger
   console.log('aspiron ok');
   // aspiron debugger
   return (
      <>
         <NavbarTop MenuName="CGK - JED" MenuDescription="CGK - Jakarta -> JDH - Jeddah"/>
         <SearchTicketResultContainer/>
      </>
   );
};

export default SearchTicketResultPage;
