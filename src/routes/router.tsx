import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import TicketsPage from "../Pages/TicketsPage/TicketsPage";
import SearchTicketResultPage from "../Pages/SearchTicketResultPage/SearchResultPage";
import ProductDetailPage from "../Pages/ProductDetailPage/ProductDetailPage";

const BaseRouter = () => (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tickets" element={<TicketsPage/>}/>
        <Route path="/search-ticket-results" element={<SearchTicketResultPage/>}/>
        <Route path="/product-details" element={<ProductDetailPage/>}/>
    </Routes>
)

export default BaseRouter
