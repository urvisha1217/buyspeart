import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
// import HeroSection from "./components/HeroSection";
// import BestSellingProducts from "./components/BestSellingProducts";
// import ProductGrid from "./components/ProductGrid";
// import NewArrival from "./components/NewArrival";
// import FeaturesSection from "./components/FeaturesSection";
import ProductSection from "./components/ProductSection";
import AllProducts from "./components/AllProducts";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProfileEdit from "./components/ProfileEdit";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<ProductSection />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Single-product" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<ProfileEdit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;