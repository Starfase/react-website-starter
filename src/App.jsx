import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Visit from "./sections/Visit";
import Footer from "./sections/Footer";

import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Visit />

      <Footer />

      <BackToTop />

      <WhatsAppButton />
    </>
  );
}

export default App;
