import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import BestSellingProducts from "./BestSellingProducts";
import ProductGrid from "./ProductGrid";
import NewArrival from "./NewArrival";
import FeaturesSection from "./FeaturesSection";

export default function HomePage() {
    return (
      <>
      <Header />

      <HeroSection />
      <BestSellingProducts />
      <ProductGrid />
      <NewArrival />
      <FeaturesSection />

      <Footer />
      </>
    );
  }
  