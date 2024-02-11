import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import SearchTicketResultsContainer from "../../Components/SearchTicketResultContainer/SearchTicketResultContainer";

const SearchTicketResultsPage: React.FC = () => {
   // aspiron debugger
   console.log('aspiron ok');
   // aspiron debugger
   return (
      <>
         <NavigationTop MenuName="CGK - JED" MenuDescription="CGK - Jakarta -> JDH - Jeddah"/>
         <SearchTicketResultsContainer/>
      </>
   );
};

export default SearchTicketResultsPage;
