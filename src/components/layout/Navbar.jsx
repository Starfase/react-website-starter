import { useEffect, useState } from "react";

import Logo from "../ui/Logo";
import Button from "../ui/Button";
import NavLink from "../ui/NavLink";
import Container from "../ui/Container";
import HamburgerButton from "../ui/HamburgerButton";
import church from "../../data/church";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/75 backdrop-blur-2xl border-b border-white/10 shadow-xl"
            : "bg-slate-950/40 backdrop-blur-md"
        }`}
      >
        <Container
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-20" : "h-24"
          }`}
        >
          <Logo />

          {/* Desktop */}

          <nav className="hidden items-center gap-10 md:flex">
            {church.navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button>{church.cta}</Button>
          </div>

          <HamburgerButton open={menuOpen} onClick={toggleMenu} />
        </Container>

        {/* Mobile Dropdown */}

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100 border-t border-slate-800"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`bg-slate-950/95 px-6 py-6 backdrop-blur-xl transition-all duration-500 ${
              menuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            <nav className="flex flex-col gap-5">
              {church.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-medium text-white transition hover:text-green-400"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4">
                <Button href="#visit" className="w-full">
                  {church.cta}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
