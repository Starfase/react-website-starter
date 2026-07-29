import { useEffect, useState } from "react";

import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import UpcomingPrograms from "./sections/UpcomingPrograms";
import Visit from "./sections/Visit";
import PrayerRequest from "./sections/PrayerRequest";
import Footer from "./sections/Footer";

import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [hideAnnouncement, setHideAnnouncement] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideAnnouncement(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <AnnouncementBar hidden={hideAnnouncement} />

      <Navbar announcementHidden={hideAnnouncement} />

      <Hero />

      <About />

      <Services />

      <UpcomingPrograms />

      <Visit />

      <PrayerRequest />

      <Footer />

      <BackToTop />

      <WhatsAppButton />
    </>
  );
}

export default App;
