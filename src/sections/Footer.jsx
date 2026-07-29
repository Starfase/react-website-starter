import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import logo from "../assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

import { FaFacebookF } from "react-icons/fa";

import { client } from "../sanity/client";
import { CHURCH_INFO_QUERY } from "../queries/churchInfo";

function Footer() {
  const [churchInfo, setChurchInfo] = useState(null);

  useEffect(() => {
    async function loadChurchInfo() {
      try {
        const data = await client.fetch(CHURCH_INFO_QUERY);
        setChurchInfo(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadChurchInfo();
  }, []);

  if (!churchInfo) return null;

  return (
    <footer className="bg-slate-950 text-slate-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Church Info */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src={logo}
                alt={churchInfo.churchName}
                className="h-14 w-14 object-contain"
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  {churchInfo.churchName}
                </h3>

                <p className="text-sm text-slate-400">RCCG Parish</p>
              </div>
            </div>

            <p className="leading-8 text-slate-400">
              A welcoming church where lives are transformed through God's Word,
              worship, prayer and genuine fellowship.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Quick Links</h3>

            <nav className="flex flex-col gap-3">
              <a href="#home" className="hover:text-green-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-green-400 transition">
                About
              </a>

              <a href="#services" className="hover:text-green-400 transition">
                Weekly Services
              </a>

              <a href="#programs" className="hover:text-green-400 transition">
                Upcoming Programs
              </a>

              <a href="#visit" className="hover:text-green-400 transition">
                Visit
              </a>

              <a href="#prayer" className="hover:text-green-400 transition">
                Prayer Request
              </a>
            </nav>
          </div>

          {/* Connect */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Connect With Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-green-500" />

                <p>{churchInfo.address}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-green-500" />

                <p>{churchInfo.phone}</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-green-500" />

                <p>{churchInfo.email}</p>
              </div>

              <a
                href={churchInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
              >
                <FaFacebookF size={18} />
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} {churchInfo.churchName}, Asaba. All
            Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Designed & Developed by{" "}
            <span className="italic text-green-500">Heliejar</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
