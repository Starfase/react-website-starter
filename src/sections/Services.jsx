import { Sun, BookOpen, HeartHandshake } from "lucide-react";

import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

const services = [
  {
    icon: Sun,
    title: "Sunday Worship Service",
    day: "Every Sunday",
    time: "8:00 AM",
    description:
      "Join us for uplifting worship, inspiring messages, and a life-changing encounter with God.",
  },
  {
    icon: BookOpen,
    title: "Digging Deep",
    day: "Every Tuesday",
    time: "5:00 PM",
    description:
      "Grow deeper in God's Word through practical Bible teaching, discussion, and spiritual discovery.",
  },
  {
    icon: HeartHandshake,
    title: "Faith Clinic",
    day: "Every Thursday",
    time: "5:00 PM",
    description:
      "A dedicated prayer service for healing, breakthroughs, restoration, and strengthening your faith.",
  },
];

function Services() {
  return (
    <section id="services" data-aos="fade-up" className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          label="JOIN US THIS WEEK"
          title="Weekly Services"
          description="There is always a place for you. Join us as we worship God, study His Word, and grow together in faith."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
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
