import DateFilter from "../../Components/DateFilter/DateFilter";
import NavigationTop from "../../Components/Navigation/NavigationTop/NavigationTop";
import SearchTicketResultsContainer from "../../Components/SearchTicketResultContainer/SearchTicketResultContainer";

const SearchTicketResultsPage: React.FC = () => {
   // aspiron debugger
   console.log('aspiron ok');
   // aspiron debugger
   return (
      <>
         <NavigationTop MenuName="CGK - JED" MenuDescription="CGK - Jakarta -> JDH - Jeddah"/>
         <DateFilter/>
         <SearchTicketResultsContainer/>
      </>
   );
};

export default SearchTicketResultsPage;
