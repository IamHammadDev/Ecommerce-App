import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./modules/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/product/Product";
import ProductM from "./modules/Products/ProductM";
import CategoryProduc from "./modules/categoryProduct/CategoryProduc";
import Cart from "./modules/cart/Cart";
import PageNotF from "./components/Page404/PageNotF";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<ProductM />} />
        <Route path="/categories/:name" element={<CategoryProduc />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotF />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
