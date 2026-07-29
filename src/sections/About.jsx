import { useEffect, useState } from "react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";

import { client } from "../sanity/client";
import { urlFor } from "../sanity/imageUrl";

import { CHURCH_INFO_QUERY } from "../queries/churchInfo";
import { GALLERY_QUERY } from "../queries/gallery";

function About() {
  const [churchInfo, setChurchInfo] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        const [church, images] = await Promise.all([
          client.fetch(CHURCH_INFO_QUERY),
          client.fetch(GALLERY_QUERY),
        ]);

        setChurchInfo(church);
        setGallery(images);
      } catch (error) {
        console.error("ABOUT ERROR:", error);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    if (gallery.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % gallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [gallery]);

  if (!churchInfo || gallery.length === 0) {
    return null;
  }

  return (
    <section id="about" data-aos="fade-up" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Images */}

          <div className="relative overflow-hidden rounded-3xl">
            <img
              key={currentImage}
              src={urlFor(gallery[currentImage].image).width(900).url()}
              alt={gallery[currentImage].title}
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

            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-green-600"></div>

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {gallery.map((_, index) => (
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
              title={churchInfo.aboutTitle}
              description={churchInfo.aboutDescription}
            />

            <div className="mb-10 space-y-4">
              {churchInfo.aboutHighlights?.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
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
