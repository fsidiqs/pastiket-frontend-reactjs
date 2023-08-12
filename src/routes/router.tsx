import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import TicketsPage from "../Pages/TicketsPage/TicketsPage";
import SearchTicketResultPage from "../Pages/SearchTicketResultPage/SearchResultPage";
import TicketDetailPage from "../Pages/TicketDetailPage/TicketDetailPage";
import LoginPage from "../Pages/Login/Login";
import NotAuthenticated from "./not-authenticated";
import Authenticated from "./authenticated";

const BaseRouter = () => (
   <Routes>
      <Route path="/" element={<Authenticated />}>
         <Route index element={<HomePage />} />
         <Route path="/tickets" element={<TicketsPage />} />
         <Route
            path="/search-ticket-results"
            element={<SearchTicketResultPage />}
         />
         <Route path="/ticket-details" element={<TicketDetailPage />} />
      </Route>
      <Route element={<NotAuthenticated />}>
         <Route path="/login" element={<LoginPage />} />
         {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
         <Route path="/reset-password" element={<ResetPasswordPage />} /> */}
      </Route>
   </Routes>
);

export default BaseRouter;
