import {
   Route,
   RouterProvider,
   Routes,
   createBrowserRouter,
} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import TicketsPage from "../Pages/TicketsPage/TicketsPage";
import SearchTicketResultPage from "../Pages/SearchTicketResultPage/SearchResultPage";
import TicketDetailPage from "../Pages/TicketDetailPage/TicketDetailPage";
import LoginPage from "../Pages/Login/Login";
import NotAuthenticated from "./not-authenticated";
import Authenticated from "./authenticated";
import Navigation from "../Components/Navigation/NavigationMain/Navigation";
import OrderDetailPage from "../Pages/OrderDetail/OrderDetail";
import PaymentPage from "../Pages/Payment/Payment";

// const BaseRouter = () => (
//    <Routes>
//       <Route path="/" element={<Authenticated />}>
//          <Route index element={<HomePage />} />
//          <Route path="/tickets" element={<TicketsPage />} />
//          <Route
//             path="/search-ticket-results"
//             element={<SearchTicketResultPage />}
//          />
//          <Route path="/ticket-details" element={<TicketDetailPage />} />
//       </Route>
//       <Route element={<NotAuthenticated />}>
//          <Route path="/login" element={<LoginPage />} />
//          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//          <Route path="/reset-password" element={<ResetPasswordPage />} /> */}
//       </Route>
//    </Routes>
// );

const router = createBrowserRouter([
   {
      path: "/",
      element: <Authenticated />,
      children: [
         { path: "/", element: <LoginPage /> },
         {
            path: "/",
            element: <Navigation />,
            children: [
               { path: "/dashboard", element: <HomePage /> },
               { path: "/search-ticket", element: <TicketsPage /> },
               {
                  path: "/search-ticket-result",
                  element: <SearchTicketResultPage />,
               },
               // { path: "/ticket-details", element: <TicketDetailPage /> },
               { path: "/order-details", element: <OrderDetailPage /> },
               { path: "/payment", element: <PaymentPage /> },
            ],
         },
      ],
   },
   {
      path: "/",
      element: <NotAuthenticated />,
      children: [
         { path: "/login", element: <LoginPage /> },
         // { path: "/forgot-password", element: <ForgotPasswordPage /> },
         // { path: "/reset-password", element: <ResetPasswordPage /> }
      ],
   },
]);

export default function Router() {
   return <RouterProvider router={router} />;
}
