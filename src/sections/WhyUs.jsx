import { BookOpen, Heart, HandHelping, Users } from "lucide-react";

import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

const reasons = [
  {
    icon: BookOpen,
    title: "Bible-Centered Teaching",
    description:
      "Every message is rooted in God's Word, helping you grow spiritually and apply biblical truths in everyday life.",
  },
  {
    icon: Heart,
    title: "Powerful Prayer",
    description:
      "Experience heartfelt prayer, encouragement, and faith that strengthens lives through God's power.",
  },
  {
    icon: HandHelping,
    title: "Loving Community",
    description:
      "Build meaningful friendships in a welcoming family of believers who genuinely care for one another.",
  },
  {
    icon: Users,
    title: "Everyone Is Welcome",
    description:
      "Whether you're visiting for the first time or looking for a church home, you'll always find a place to belong.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" data-aos="fade-up" className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="WHY WORSHIP WITH US"
          title="A Place Where Faith Comes Alive"
          description="We are passionate about helping people know Christ, grow in faith, and experience genuine Christian fellowship."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <Card
                key={reason.title}
                className="border border-slate-200 p-8 text-center hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="leading-7 text-slate-600">{reason.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;
