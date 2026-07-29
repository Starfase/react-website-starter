import { useEffect, useState } from "react";
import { Sun, BookOpen, HeartHandshake, Calendar } from "lucide-react";

import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

import { client } from "../sanity/client";
import { SERVICES_QUERY } from "../queries/services";

const icons = {
  Sun,
  BookOpen,
  HeartHandshake,
  Calendar,
};

function Services() {
  const [services, setServices] = useState([]);


  useEffect(() => {
    async function loadServices() {
      try {
        const data = await client.fetch(SERVICES_QUERY);

        console.log("SERVICES:", data);

        setServices(data);
      } catch (error) {
        console.error("SERVICE ERROR:", error);
      }
    }
    loadServices();
  }, []);

 
  return (
    <section id="services" data-aos="fade-up" className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          label="JOIN US THIS WEEK"
          title="Weekly Services"
          description="There is always a place for you. Join us as we worship God, study His Word, and grow together in faith."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] || Calendar;

            return (
              <Card
                key={service._id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="font-semibold text-green-600">{service.day}</p>

                <p className="mb-5 text-slate-700">{service.time}</p>

                <p className="leading-7 text-slate-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;
