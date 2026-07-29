import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

import { client } from "../sanity/client";

import { CHURCH_INFO_QUERY } from "../queries/churchInfo";
import { SERVICES_QUERY } from "../queries/services";

function Visit() {
  const [churchInfo, setChurchInfo] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [church, weeklyServices] = await Promise.all([
          client.fetch(CHURCH_INFO_QUERY),
          client.fetch(SERVICES_QUERY),
        ]);

        setChurchInfo(church);
        setServices(weeklyServices);
      } catch (error) {
        console.error("VISIT ERROR:", error);
      }
    }

    loadData();
  }, []);

  if (!churchInfo) return null;

  return (
    <section
      id="visit"
      data-aos="fade-up"
      className="bg-slate-900 py-24 text-white"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              PLAN YOUR VISIT
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight">
              We'd Love to
              <br />
              Welcome You
            </h2>

            <p className="mb-10 text-lg leading-8 text-slate-300">
              Whether you're visiting for the first time or searching for a
              church family, there's a place for you at RCCG Open Heaven Model
              Parish.
            </p>

            <a
              href={churchInfo.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                Get Directions
              </Button>
            </a>
          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-slate-700 bg-slate-800/70 p-8 backdrop-blur-sm">

            <div className="mb-8 flex items-start gap-4">
              <div className="rounded-full bg-green-600/20 p-3">
                <MapPin
                  className="text-green-400"
                  size={24}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Church Address
                </h3>

                <p className="mt-2 leading-8 text-slate-300">
                  {churchInfo.address}
                </p>
              </div>
            </div>

            <hr className="my-8 border-slate-700" />

            <div className="mb-5 flex items-center gap-4">
              <Phone
                className="text-green-400"
                size={22}
              />

              <div>
                <p className="font-semibold">
                  Phone
                </p>

                <a
                  href={`tel:${churchInfo.phone}`}
                  className="text-slate-400 hover:text-green-400"
                >
                  {churchInfo.phone}
                </a>
              </div>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <Mail
                className="text-green-400"
                size={22}
              />

              <div>
                <p className="font-semibold">
                  Email
                </p>

                <a
                  href={`mailto:${churchInfo.email}`}
                  className="text-slate-400 hover:text-green-400"
                >
                  {churchInfo.email}
                </a>
              </div>
            </div>

            <hr className="my-8 border-slate-700" />

            <div className="space-y-6">

              {services.slice(0,3).map((service) => (

                <div
                  key={service._id}
                  className="flex items-center gap-4"
                >
                  <Calendar
                    className="text-green-400"
                    size={22}
                  />

                  <div>
                    <p className="font-semibold">
                      {service.title}
                    </p>

                    <p className="text-slate-400">
                      {service.day} • {service.time}
                    </p>
                  </div>
                </div>

              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Visit;