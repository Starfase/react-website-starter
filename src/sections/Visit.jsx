import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import church from "../data/church";
import { MapPin, Clock, BookOpen, HeartHandshake } from "lucide-react";

function Visit() {
  return (
    <section
      id="visit"
      data-aos="fade-up"
      className="bg-slate-900 py-24 text-white"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
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
              Parish. We look forward to worshipping with you.
            </p>

            <a
              href="https://maps.app.goo.gl/s2RDBDkWz2gkYnpS6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Get Directions</Button>
            </a>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="mb-8 flex items-start gap-4">
              <div className="rounded-full bg-green-600/20 p-3">
                <MapPin className="text-green-400" size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Church Address</h3>

                <p className="mt-2 leading-8 text-slate-300">
                  13 Joe Dansaba Street
                  <br />
                  Beside Stadium
                  <br />
                  Off MFM Road
                  <br />
                  Asaba
                </p>
              </div>
            </div>

            <hr className="my-8 border-slate-700" />

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="text-green-400" size={22} />

                <div>
                  <p className="font-semibold">Sunday Worship</p>

                  <p className="text-slate-400">Every Sunday • 8:00 AM</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <BookOpen className="text-green-400" size={22} />

                <div>
                  <p className="font-semibold">Digging Deep</p>

                  <p className="text-slate-400">Every Tuesday • 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <HeartHandshake className="text-green-400" size={22} />

                <div>
                  <p className="font-semibold">Faith Clinic</p>

                  <p className="text-slate-400">Every Thursday • 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Visit;
