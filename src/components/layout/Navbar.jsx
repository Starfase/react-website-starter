import Logo from "../ui/Logo";
import Button from "../ui/Button";
import NavLink from "../ui/NavLink";
import Container from "../ui/Container";
import church from "../../data/church";

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex h-24 items-center justify-between">
        <Logo />

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
      </Container>
    </header>
  );
}

export default Navbar;
