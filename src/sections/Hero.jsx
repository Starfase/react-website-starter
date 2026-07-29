import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import heroImage from "../assets/images/hero.jpg";
import church from "../data/church";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { MapPin, Clock } from "lucide-react";

function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 lg:pt-32"
    >
      {/* Background */}

      <motion.img
        src={heroImage}
        alt={church.name}
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 18,
          ease: "linear",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/50"></div>

      {/* Glow */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute left-20 top-40 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"
      />

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>

      <Container className="relative z-10">
        <div className="max-w-3xl pt-32 pb-20 sm:pt-36 md:pt-40 lg:pt-16">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-green-300">
              Welcome to RCCG
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Open Heaven
            <br />
            Model Parish
          </motion.h1>

          {/* City */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-5 text-xl font-bold tracking-[0.15em] text-green-400 sm:text-2xl"
          >
            ASABA
          </motion.p>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
          >
            Experience heartfelt worship, sound biblical teaching, passionate
            prayer and genuine Christian fellowship in a warm and welcoming
            church family.
          </motion.p>

          {/* Quick Info */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <MapPin size={16} className="text-green-400" />

              <span className="text-sm text-slate-200">
                13 Joe Dansaba Street, Asaba
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <Clock size={16} className="text-green-400" />

              <span className="text-sm text-slate-200">
                Sunday Worship • 8:00 AM
              </span>
            </div>
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#visit">Plan Your Visit</Button>

            <Button href="#services" variant="secondary">
              Join Us This Sunday
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-center text-white transition-all duration-500 md:block ${
          showScroll ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="text-3xl">⌄</div>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-300">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
