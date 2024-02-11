import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import SearchTicketResultContainer from "../../Components/SearchTicketResultContainer/SearchTicketResultContainer";

const SearchTicketResultPage: React.FC = () => {
   // aspiron debugger
   console.log('aspiron ok');
   // aspiron debugger
   return (
      <>
         <NavigationTop MenuName="CGK - JED" MenuDescription="CGK - Jakarta -> JDH - Jeddah"/>
         <SearchTicketResultContainer/>
      </>
   );
};

export default SearchTicketResultPage;
