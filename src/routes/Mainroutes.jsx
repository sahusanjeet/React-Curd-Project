import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Product from "../components/Product";
import Service from "../components/Service";
import ProductDetails from "../components/ProductsDetails"

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/details/:name" element={<ProductDetails />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
