import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Navbar2 from "@/components/layouts/Navbar2";
import HeroSection from "@/components/pages/landing-pages/HeroSection";
import AboutUs from "@/components/pages/landing-pages/MNG";
import Link from "next/link";
import { redirect } from "next/navigation";
function Home() {
  return(
    <>
    <Navbar/>
    <Navbar2/>
    <HeroSection/>
    <Footer/>
    </>
  )
  
}

export default Home;
