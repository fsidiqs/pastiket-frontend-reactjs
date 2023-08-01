import NavbarTop from "../../Components/Navbar/NavbarTop/NavbarTop";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";

const ProductDetailPage: React.FC = () => {
   return (
      <>
         <NavbarTop MenuName="Detail Pemesanan" />
         <ProductDetail/>
      </>
   );
};

export default ProductDetailPage;
