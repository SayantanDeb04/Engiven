import Head from "next/head";
import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import GetStarted from "../components/Home/GetStarted";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Powered from "../components/Home/Powered";
import Navbar from "../components/NavbarHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Engiven</title>
      </Head>
      <Navbar />
      <Hero />
      <Powered />
      <div className="h-[150px]"></div>
      <HowItWorks />
      <div className="h-[150px]"></div>
      <Banner />
      <div className="h-[150px]"></div>
      <GetStarted />
      <div className="h-[250px]"></div>
      <Footer />
    </>
  );
}
