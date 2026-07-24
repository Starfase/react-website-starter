import Container from "../components/ui/Container";
import church from "../data/church";
import logo from "../assets/logo.png";
import { MapPin, Clock } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer data-aos="fade-up" className="bg-slate-950 text-slate-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Church Info */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src={logo}
                alt={church.name}
                className="h-12 w-12 object-contain"
              />

              <div>
                <h3 className="font-bold text-white">{church.name}</h3>
                <p className="text-sm">{church.city}</p>
              </div>
            </div>

            <p className="leading-7 text-slate-400">
              A welcoming church where lives are transformed through God's Word,
              worship, prayer, and genuine fellowship.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Visit Us</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0 text-green-500"
                />

                <p>{church.address}</p>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={20}
                  className="mt-1 flex-shrink-0 text-green-500"
                />

                <div>
                  <p>Sunday Service — 8:00 AM</p>
                  <p>Digging Deep — Tuesday 5:00 PM</p>
                  <p>Faith Clinic — Thursday 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Connect With Us
            </h3>

            <a
              href={church.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-green-700"
            >
              <FaFacebookF size={18} />
              Follow us on Facebook
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} {church.name}. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Designed & Developed by{" "}
            <span className="font-semibold text-green-500">Heliejar</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
