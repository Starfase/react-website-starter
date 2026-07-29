import { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

import { client } from "../sanity/client";
import { urlFor } from "../sanity/imageUrl";
import { EVENTS_QUERY } from "../queries/events";

function UpcomingPrograms() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const data = await client.fetch(EVENTS_QUERY);
      setEvents(data);
    }

    loadEvents();
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          label="DON'T MISS IT"
          title="Upcoming Programs"
          description="Join us for special programs designed to strengthen your faith and draw you closer to God."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={urlFor(event.image).width(600).url()}
                alt={event.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold">{event.title}</h3>

                <div className="mb-3 flex items-center gap-2 text-green-600">
                  <CalendarDays size={18} />

                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>

                <div className="mb-4 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />

                  <span>{event.location}</span>
                </div>

                <p className="leading-7 text-slate-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default UpcomingPrograms;
