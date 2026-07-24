import { useEffect, useState } from "react";

import about1 from "../assets/images/about/about1.jpg";
import about2 from "../assets/images/about/about2.jpg";
import about3 from "../assets/images/about/about3.jpg";
import about4 from "../assets/images/about/about4.jpg";
import about5 from "../assets/images/about/about5.jpg";
import about6 from "../assets/images/about/about6.jpg";
import about7 from "../assets/images/about/about7.jpg";
import about8 from "../assets/images/about/about8.jpg";

import church from "../data/church";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";

const images = [about1, about2, about3, about4, about5, about6, about7, about8];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" data-aos="fade-up" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Images */}

          <div className="relative overflow-hidden rounded-3xl">
            <img
              key={currentImage}
              src={images[currentImage]}
              alt="Church Worship"
              className="
                h-[520px]
                w-full
                rounded-3xl
                object-cover
                shadow-2xl
                transition-all
                duration-1000
                ease-in-out
                animate-imageFade
                hover:scale-105
              "
            />

            {/* Green Block */}

            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-green-600"></div>

            {/* Image Indicators */}

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentImage === index ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}

          <div>
            <SectionTitle
              center={false}
              label="ABOUT US"
              title={church.about.title}
              description={church.about.description}
            />

            <div className="mb-10 space-y-4">
              {church.about.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <div className="h-3 w-3 rounded-full bg-green-600"></div>
                  </div>

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Button href="#visit">Learn More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
